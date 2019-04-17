<template>
  <v-flex xs12 sm8>
    <v-autocomplete
      v-model="genres"
      :disabled="isUpdating"
      :items="suggestedGenres"
      box
      chips
      color="blue-grey lighten-2"
      placeholder="Please start typing..."
      label="Select genre"
      item-text="name"
      item-value="_id"
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
          {{ data.item.name }}
        </v-chip>
      </template>
      <template v-slot:item="data">
        <template v-if="typeof data.item === 'object'">
          <v-list-tile-content v-text="data.item.name" @click="save"/>
        </template>
      </template>
    </v-autocomplete>
  </v-flex>    
</template>

<script>
import genreService from '@/utils/services/genre-service'

import { inputMixin } from '@/mixins/inputMixin'

export default {
  name: 'GenreList',

  props: {
    genreslist: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      suggestedGenres: [],
      genres: this.genreslist.slice(),
      isUpdating: false
    }
  },

  methods: {
    save() {
      setTimeout(() => {this.$emit('changeGenreList', this.genres.slice())}, 100)
    },
    remove (item) {
      const index = this.genres.indexOf(item._id)
      if (index >= 0) {
        this.genres.splice(index, 1)
        this.$emit('changeGenreList', this.genres.slice())
      }
    },
    getAllGenres () {
      genreService.getAll()
      .then(({data}) => {
        this.suggestedGenres = data
      })
    }
  },

  created () {
    this.getAllGenres()
  },

  mixins: [
    inputMixin
  ],
}
</script>
