<template>
  <v-container justify-center grid-list-md text-xs-center mx-5>
    <v-content justify-center>
      <v-layout row wrap sm6 md4>

        <!-- <ExistingMessage /> -->

        <v-card min-width="100vh" max-width="120vh">
          <v-toolbar>
            <v-toolbar-items>
              <v-btn flat>Sent by me</v-btn>
              <v-btn flat>Sent to me</v-btn>
            </v-toolbar-items>
            <NewMessage />
          </v-toolbar>

        <MessageList/>

        </v-card>

      </v-layout>
    </v-content>
  </v-container>
</template>

<script>
/* import ExistingMessage from '@/components/dialog/ExistingMessage' */
import NewMessage from '@/components/dialog/NewMessage'
import MessageList from '@/components/messages/MessageList'

export default {
  data () {
    return {
    
    }
  },

  components: {
    MessageList, NewMessage, /* ExistingMessage,  */
  }
}
</script>
