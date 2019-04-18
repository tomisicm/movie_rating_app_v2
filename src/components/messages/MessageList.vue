<template>
<div>
  
  

  <v-list two-line>
    
    <div v-for="(item, index) in items" :key="item.id">
      
      <Message 
        :item = "item"
        :index = "index"
      />

    </div>
  </v-list>
</div>
</template>

<script>
import messageService from '@/utils/services/message-service'

import ExistingMessage from '@/components/dialog/ExistingMessage'
import Message from '@/components/messages/Message'

export default {
  props: {
    items: Array
  },

  data () {
    return {
      
    }
  },


  components: {
    Message, ExistingMessage,
  }

}
</script>
