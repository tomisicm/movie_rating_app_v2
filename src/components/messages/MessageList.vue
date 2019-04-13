<template>
  <v-list two-line>
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

  components: {
    Message
  }

}
</script>
