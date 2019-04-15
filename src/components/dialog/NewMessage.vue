<template>
  <v-layout row>
    <v-spacer></v-spacer>
    <v-btn 
      right fab dark color="primary"
      @click.stop="dialog = true"
    >
    <v-icon dark>add</v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="500"
      @keydown.esc="dialog = false"
    >
    <v-form ref="form">
      <v-card height="400px" id='message'>
        <v-card-title class="headline">

          <UserList 
            :recipiants="recipiants"
            v-on:changeRecipiantsList="changeRecipiantsList($event)"
          />

        </v-card-title>

        <v-card-text>

          <v-flex>
            <v-textarea
              rows="7"
              outline
              name="input-7-4"
              v-model="body"
            ></v-textarea>
          </v-flex>

        </v-card-text>
        
        <v-card-actions id='message-footer'>
          <v-spacer />
          <v-btn right large color="primary" flat
            @click="onCancel"
          >Cancel</v-btn>

          <v-btn large color="primary white--text" flat
            @click="onSubmit"
          >Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
    </v-dialog>
  </v-layout>
</template>

<script>
import messagingService from '@/utils/services/message-service'

import UserList from '@/components/messages/UserList'

export default {
  data () { 
    return {
      dialog: false,

      recipiants: [],
      body: ''
    }
  },

  methods: {
    changeRecipiantsList(newRecipiantList) {
      this.recipiants = newRecipiantList
    },

    onCancel () {
      this.$refs.form.reset()
      this.dialog = false
    },

    async onSubmit () {
      await messagingService.sendUserMessage(
        {
          message: {
            body: this.body
          },
          recipiants: this.recipiants,
        }
      ).then( ({data}) => {
        // each recipiant id will get send
        data.recipiants.forEach(recipiant => (this.$socket.emit('user_message', recipiant)))
      }).then(this.onCancel())
    }
  },

  components: {
    UserList
  }

}
</script>

<style>
#message {
  position: relative;
}
#message-footer {
  position: absolute;
  bottom: 0;
}
</style>
