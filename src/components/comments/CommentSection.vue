<template>
  <div>
    <div class="subheading grey--text my-2">
      Comment section:
    </div>
    <v-divider />
    <v-container justify-center class="text-xs-center">
      <v-pagination
        v-model="page"
        :length="pages"
        color="primary"
      ></v-pagination>
    </v-container>
    <v-list v-for="comment in comments" :key="comment._id" :id="comment._id" class="comment">
      <SingleComment
        :comment="comment"
        :key="comment._id"
      />
    </v-list>
    <AddComment />

  </div>
</template>

<script>
import commentService from '@/utils/services/comment-service'
import { eventBus } from '@/main'

import SingleComment from '@/components/comments/SingleComment'
import AddComment from '@/components/comments/AddComment'

export default {
  name: 'CommentSection',
  
  data: () => ({
    limit: 5,
    page: 1,
    pages: null,
    total: null,
    comments: null
  }),

  methods: {
    getComments () {
      commentService
      .getCommentsByItemId(this.$route.params.id, this.page, this.limit)
      .then(({data}) => {
        this.total = data.total
        this.limit = data.limit
        this.page = data.page
        this.pages = data.pages
        this.comments = data.docs
      })
    }
  },
  created () {
    this.getComments()
    eventBus.$on('updateView', () => {
      this.getComments()
    })
  },
  watch: {
    page() {
      this.getComments()
    }
  },

  components: { SingleComment, AddComment, }
}
</script>

<style scoped>
div.v-list.comment {
  padding: 2px 0 2px
}

</style>
