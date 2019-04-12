<template>
  <v-flex>
    <v-autocomplete
      v-model="users"
      :items="suggestedUsers"
      :search-input.sync="search"
      cache-items
      chips
      color="blue-grey lighten-2"
      label="Select users to send message to:"
      item-text="name"
      item-value="_id"
      placeholder="Please start typing"
      multiple
    >
    <template v-slot:selection="data">
      <v-chip
        :selected="data.selected"
        close
        class="chip--select-multi"
        @input="remove(data.item)"
      >
        {{ data.item.name }}
      </v-chip>
    </template>
    <template v-slot:item="data">
      <template v-if="typeof data.item === 'object'">
        <v-list-tile-content v-text="data.item.name" @click="save()"/>
      </template>
    </template>
    </v-autocomplete>
  </v-flex>    
</template>


<script>
import userService from '@/utils/services/user-service'
import _ from 'lodash'

import { inputMixin } from '@/mixins/inputMixin'

export default {
  name: 'UserList',

  props: {
    userlist: Array,
    default () {
      return []
    }
  },

  data () {
    return {
      search: '',
      users: [],/* this.userlist.slice(), */
      suggestedUsers: []
    }
  },

  watch: {
    search () {
      this.getUsers(this.search)
    }
  },

  computed: {
    /* itemsArray () {
      return this.suggestedUsers.map(o => o.fullname)
    } */
  },

  methods: {
    save() {
      setTimeout(() => {this.$emit('changeStarsList', this.users)}, 100)
    },
    remove (item) {
      const index = this.users.indexOf(item._id)
      if (index >= 0) this.users.splice(index, 1)
    },
    getUsers (search) {
      userService.searchForUsers(search)
      .then(({data}) => {
        this.suggestedUsers = data.docs
      })
    }
  },

  created () {
    this.getUsers = _.debounce(this.getUsers, 1000)
  },

  mixins: [
    inputMixin
  ],
}
</script>
