<template>
  <v-list two-line>
    <ExistingMessage />
    <div v-for="(item, index) in items" :key="item.id">

      <Message 
        :item = "item"
        :index = "index"
      />

    </div>
  </v-list>
</template>

<script>
import messageService from '@/utils/services/message-service'

import ExistingMessage from '@/components/dialog/ExistingMessage'
import Message from '@/components/messages/Message'

export default {
  data () {
    return {
      items: []
    }
  },

  created() {
    messageService.getAllUserMessages()
    .then(({data})=> {
      this.items = data
    })
  },

  methods: {

  },

  components: {
    Message, ExistingMessage,
  }

}
</script>
