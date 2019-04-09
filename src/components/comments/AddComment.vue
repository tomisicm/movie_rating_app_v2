<template>
<v-form>
  <v-container row class="my-2">
    <v-textarea
      v-model.trim='comment.body'
      outline
      rows="2"
      auto-grow
      counter
      name="input-4-2"
      placeholder="Add new comment"
      class="form-control"
    />
    <v-layout align-center row wrap>
      <v-spacer></v-spacer>
      <v-btn color="grey--text" right large @click="clear">
        Cancel
      </v-btn>
      <v-btn color="primary" right large :disabled="!comment.body" @click="onSubmit">
        Submit
      </v-btn>
    </v-layout>
  </v-container>
</v-form>
</template>

<script>
import { eventBus } from '@/main'
import commentService from '@/utils/services/comment-service'

export default {
  name: 'AddComment',
  data () {
    return {
      comment: {
        id: '',
        body: '',
        item: this.$route.params.id,
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.comment.id) {
        commentService.editComment(this.comment.id, this.comment)
        .then((data) => {
          eventBus.$emit('updateView', data)
        })
        return
      }
      commentService.createComment(this.comment)
    },
    clear () {
      this.comment.body = '',
      this.comment.id = ''
    }
  },
  computed: {
    
  },
  created () {
    eventBus.$on('editCommentMode', (data) => {
      this.comment.body = data.body
      this.comment.id = data.id
      this.comment.movie = data.movie
    })
    eventBus.$on('updateView', () => {
      this.clear()
    })
  }
}
</script>
