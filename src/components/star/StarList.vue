<template>
  <v-flex xs12 sm8>
    <v-autocomplete
      v-model="stars"
      :items="suggestedStars"
      :search-input.sync="search"
      cache-items
      box
      chips
      color="blue-grey lighten-2"
      label="Select movie stars"
      placeholder="Please start typing..."
      item-text="fullname"
      item-value="id"
      no-data-text="There are no stars under this name."
      multiple
      :rules="multiSelectRule"
    >
    <template v-slot:selection="data">
      <v-chip
        :selected="data.selected"
        close
        class="chip--select-multi"
        @input="remove(data.item)"
      >
        {{ data.item.fullname }}
      </v-chip>
    </template>
    <template v-slot:item="data">
      <template v-if="typeof data.item === 'object'">
        <v-list-tile-content v-text="data.item.fullname" @click="save()"/>
      </template>
    </template>
    </v-autocomplete>
  </v-flex>    
</template>

<script>
import starService from '@/utils/services/star-service'
import _  from 'lodash'

import { inputMixin } from '@/mixins/inputMixin'

export default {
  name: 'StarsList',

  props: {
    starslist: Array,
    default () {
      return []
    }
  },

  data () {
    return {
      search: null,
      stars: this.starslist.slice(),
      suggestedStars: [],
      isUpdating: false
    }
  },

  watch: {
    search () {
      this.getStars(this.search)
    }
  },

  computed: {
    itemsArray () {
      return this.suggestedStars.map(o => o.fullname)
    }
  },

  methods: {
    save() {
      setTimeout(() => {this.$emit('changeStarsList', this.stars)}, 100)
    },
    remove (item) {
      const index = this.stars.indexOf(item.id)
      if (index >= 0) this.stars.splice(index, 1)
    },
    getStars () {
      starService.searchForStarsorGetAll(this.search)
      .then(({data}) => {
        this.suggestedStars = data.docs
      })
    }
  },

  created () {
    this.getStars = _.debounce(this.getStars, 1000)
  },

  mixins: [
    inputMixin
  ],
}
</script>
