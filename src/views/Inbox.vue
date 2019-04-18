<template>
  <v-container justify-center grid-list-md text-xs-center mx-5>
    <v-content justify-center>
      <v-layout row wrap sm6 md4>

        

        <v-card min-width="100vh" max-width="120vh">
          <NewMessage />
            <v-tabs v-model="active">
              <v-tab ripple>Sent by me</v-tab>
              <v-tab ripple>Sent to me</v-tab>
            <v-tab-item>
              tab1 items
            </v-tab-item>
            <v-tab-item>
              tab2 items
            </v-tab-item>
          </v-tabs>

            
          

        <MessageList/>

        </v-card>

      </v-layout>
    </v-content>
  </v-container>
</template>

<script>
import NewMessage from '@/components/dialog/NewMessage'
import MessageList from '@/components/messages/MessageList'

export default {
  data () {
    return {
      active: null
    }
  },

  components: {
    MessageList, NewMessage, 
  }
}
</script>

<style>

</style>
