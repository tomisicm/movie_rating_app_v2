<template>
  <div class="comment" xs10 px-2>
    <v-avatar left xs1 size="50px">
      <img
        src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
        alt="user avatar"
      >
    </v-avatar>
    
    <v-layout row class="text">
      <v-flex xs12>
        <a class="username" href="#">{{ comment.createdBy.name }}</a>
        <span>@{{ comment.createdAt | formatDate('YYYY MM DD hh:mm:ss') }}</span>
        <div row><span>{{ comment.body }}</span></div>
      </v-flex>
      <v-divider vertical/>
      <div column right class="px-1 text-lg-right">
        <v-spacer></v-spacer>
        <a right><i> Quote</i></a>
        <v-spacer />

        <div v-if="currentUsersComment()">
          <a right @click="editComment"><i> Edit</i></a>
          <v-spacer />
          <DeleteCommentModal
            :comment="comment"
          />
        </div>
      </div>
    </v-layout>
</div>  
</template>

<script>
import { eventBus } from '@/main'
import { mapGetters } from 'vuex'

import dateToString from '@/mixins/dateToString'

import DeleteCommentModal from '@/components/dialog/DeleteCommentModal'

export default {
  name: 'SingleComment',

  props: { 
    comment: {
      type: Object
    }
  },

  methods: {
    ...mapGetters([
      'getUser'
    ]),
    editComment () {
      eventBus.$emit('editCommentMode', this.comment)
    },
    currentUsersComment () {
      return this.comment.createdBy._id === this.getUser()._id
    }
  },

  mixins: [ dateToString ],

  components: {
    DeleteCommentModal
  }
}
</script>

<style scoped>
.comment {
  display: flex;
  padding: 8px;
  margin-bottom: 4px;
  align-items: center;
  background-color: #F2F2F2;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}
.comment .avatar {
  align-self: flex-start;
}
.comment .avatar > img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  align-self: start;
}
.comment .text {
  text-align: left;
  margin-left: 15px;
}
.comment .text span {
  margin-left: 5px;
}
.comment .text .username {
  font-weight: bold;
  color: #333;
}
</style>