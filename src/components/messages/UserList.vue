<template>
  <v-flex>
    <span>Select users to send message to:</span>
    <v-autocomplete
      v-model="localRecipiants"
      :items="suggestedRecipiants"
      :search-input.sync="search"
      cache-items
      chips
      color="blue-grey lighten-2"
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
    recipiants: Array,
    default () {
      return []
    }
  },

  data () {
    return {
      search: '',
      localRecipiants: this.recipiants.slice(),
      suggestedRecipiants: []
    }
  },

  watch: {
    search () {
      this.getUsers(this.search)
    }
  },

  computed: {
    
  },

  methods: {
    save() {
      setTimeout(() => {this.$emit('changeRecipiantsList', this.localRecipiants)}, 100)
    },
    remove (item) {
      const index = this.localRecipiants.indexOf(item._id)
      if (index >= 0) this.localRecipiants.splice(index, 1)
    },
    getUsers (search) {
      userService.searchForUsers(search)
      .then(({data}) => {
        this.suggestedRecipiants = data.docs
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
