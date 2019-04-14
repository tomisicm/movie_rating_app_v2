<template>
  <v-flex xs12 sm8>
    <v-autocomplete
      v-model="stars"
      :disabled="isUpdating"
      :items="suggestedStars"
      :search-input.sync="search"
      cache-items
      box
      chips
      color="blue-grey lighten-2"
      label="Select movie stars"
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
      search: '',
      stars: this.starslist.slice(),
      suggestedStars: [],
      isUpdating: false
    }
  },

  watch: {
    search (val) {
      if (val && val.length > 2) {
        _.delay(this.getStars(this.search), 2000)
      }
    },
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
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
    getStars (search) {
      return () => {
        starService.searchForStarsorGetAll(search)
        .then(({data}) => {
          this.suggestedStars = data
        })
      }
    }
  },

  created () {
    this.getStars()
  },

  mixins: [
    inputMixin
  ],
}
</script>
