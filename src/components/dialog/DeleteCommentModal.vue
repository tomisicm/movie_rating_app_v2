<template>
<div>
  <a right  @click="open"><i> Delete</i></a>
  <v-dialog v-model="dialog" max-width="350">
    <v-card>
      <v-card-title class="headline">Conform Action</v-card-title>
      <v-card-text>Are you sure you want to delete this comment?</v-card-text>
      
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn ccolor="grey--text" flat="flat" @click="cancel">
          Cancel
        </v-btn>
        <v-btn color="primary" flat="flat" @click="confirm">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
import commentService from '@/utils/services/comment-service'

export default {
  props: {
    comment: Object
  },

  data: () => ({
    dialog: false
  }),

  methods: {
    cancel () {
      this.$emit('cancelAction')
      this.dialog = false
    },
    confirm () {
      this.$emit('confirmAction')
      this.dialog = false
      commentService.deleteComment(this.comment.id)
        .then((data) => { 
          // i should emit an event so that i fetch new round of comments
        })
    },
    open () {
      this.$emit('openDialog', this.comment)
    }
  },

  created () {
    this.$on('openDialog', () => {
      this.dialog = true
    })
  }

}
</script>

