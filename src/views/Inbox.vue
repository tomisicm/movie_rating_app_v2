<template>
  <v-container justify-center grid-list-md text-xs-center mx-5>
    <v-content justify-center>
      <v-layout row wrap sm6 md4>

        <ExistingMessage />

        <v-card min-width="100vh" max-width="120vh">
          <NewMessage />
            <v-tabs v-model="active">
              <v-tab ripple>Sent by me</v-tab>
              <v-tab ripple>Sent to me</v-tab>
            <v-tab-item>

              <MessageList :items="outboxitems"/>
            
            </v-tab-item>
            <v-tab-item>

              <MessageList :items="inboxitems"/>

            </v-tab-item>
          </v-tabs>
        </v-card>

      </v-layout>
    </v-content>
  </v-container>
</template>

<script>
import messageService from '@/utils/services/message-service'

import ExistingMessage from '@/components/dialog/ExistingMessage'
import NewMessage from '@/components/dialog/NewMessage'
import MessageList from '@/components/messages/MessageList'

export default {
  data () {
    return {
      active: null,
      inboxitems: [],
      outboxitems: []
    }
  },

  methods: {
    getInboxMsgs () {
      messageService.getInboxMessages()
        .then(({data})=> {
          this.inboxitems = data
        })
    },
    getOutboxMsgs () {
      messageService.getOutboxMessages()
        .then(({data})=> {
          this.outboxitems = data
        })
    },
  },

  created() {
    this.getInboxMsgs()
    this.getOutboxMsgs()
  },

  components: {
    MessageList, NewMessage, ExistingMessage,
  }
}
</script>

<style>

</style>
