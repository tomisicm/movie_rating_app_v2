<template>
  <v-list-tile
    :key="item.createdAt"
    avatar
  >
  <!-- <v-checkbox class='delete' v-model="selected"></v-checkbox> -->
   <v-list-tile-avatar>
      <img src='https://cdn.vuetifyjs.com/images/lists/1.jpg'>
   </v-list-tile-avatar>

   <v-list-tile-content v-on:click = "onClick">
      <v-list-tile-title>{{ recipiantName() }} {{ item.createdAt| formatDate('YYYY MM DD hh:mm:ss') }}</v-list-tile-title>
      <v-list-tile-sub-title v-html="item.message.body"></v-list-tile-sub-title>
   </v-list-tile-content>
  </v-list-tile>
</template>


<script>
import { eventBus } from '@/main'
import { mapGetters } from 'vuex'
import dateToString from '@/mixins/dateToString'

export default {

  props: {
    item: {
      type: Object,
      required: true
    },
    index: Number
  },

  data () {
    return {
      /* selected: false */
    }
  },

  methods: {
    onClick () {
      // sent by me case
      if (this.getUser._id === this.item.sender._id)
        eventBus.$emit('openConversationInChatMode', this.item.recipiants[0]._id)
      // sent to me case
      else 
        eventBus.$emit('openConversationInChatMode', this.item.sender._id)
    },
    
    recipiantName () {
      return this.item.recipiants[0].name + ' '
    }
  },

  computed: {
    ...mapGetters([
      'getUser'
    ])
  },

  mixins: [dateToString]
}
</script>

<style>
.delete {
  flex: 0 0 auto;
}

</style>
