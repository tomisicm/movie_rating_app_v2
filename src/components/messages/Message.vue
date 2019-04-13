<template>
  <v-list-tile
    :key="item.createdAt"
    avatar
  >

   <v-list-tile-avatar>
      <img src='https://cdn.vuetifyjs.com/images/lists/1.jpg'>
   </v-list-tile-avatar>

   <v-list-tile-content>
      <v-list-tile-title v-html="item.createdAt"></v-list-tile-title>
      <v-list-tile-sub-title v-html="item.message.body"></v-list-tile-sub-title>
   </v-list-tile-content>

  </v-list-tile>
</template>


<script>


export default {

  props: {
    item: {
      type: Object,
      required: true
    },
    index: Number
  },

  data() {

  }
}
</script>
