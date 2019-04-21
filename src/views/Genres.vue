<template>
  <div>
  <MoviesNav />
  <v-card flat class="pa-3">  
    <v-card-title class="title">
      Genres List:
      <v-spacer />

      <GenreDialog/>

      <v-btn color="primary" @click="addGenre">
      <v-icon>add</v-icon>
        Add Genre
      </v-btn>

      <v-text-field
        class="mx-2 px-4"
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>

    <v-data-table
      :disable-initial-sort="true"
      :headers="headers"
      :items="genres"
      item-key="_id"
      :search="search"
      :custom-filter="customFilter"
    >
    <template v-slot:items="props">
      <td class="text-xs-center">
        {{ props.item.name }}
      </td>
      <td class="text-xs-center">
        {{ props.item.type.toString() | splitStringByComma }}
      </td>
      <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editGenre(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteGenre(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <v-alert
        v-slot:no-results
        :value="true"
        color="error"
        icon="warning"
      >
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
    
  </div>
</template>

<script>
import genreService from '@/utils/services/genre-service'

import splitString from '@/mixins/formatString'
import { inputMixin } from '@/mixins/inputMixin'
import GenreDialog from '@/components/dialog/GenreDialog'
import MoviesNav from '@/components/navigation/MovieNav'

import { eventBus } from '@/main'

export default {
  name:'GenresPage',

  data () {
    return {
      dialog: false,
      search: '',
      headers: [
        { text: 'Genre name', align: 'center', value: 'name' },
        { text: 'Genre Type', align: 'center', value: 'type' },
        { text: 'Actions', align: 'center', value: 'type', sortable: false }
      ],
      genres: [],

    }
  },

  methods: {
    getAllGenres () {
      genreService.getAll()
      .then(({data}) => {
        this.genres = data
      })
    },
    customFilter(items, search, filter) {
      search = search.toString().toLowerCase();
      return items.filter(i => (
        Object.keys(i).some(j => filter(i[j], search))
      ))
    },

    editGenre (genre) {
      eventBus.$emit('editgenre', genre)
    },
    deleteGenre (genre) {
      eventBus.$emit('deletegenre', genre)
    },
    addGenre () {
      eventBus.$emit('addgenre')
    }

  },

  created () {
    this.getAllGenres()
  },


  mixins: [
    splitString, inputMixin
  ],
  components: {
    MoviesNav, GenreDialog
  },
}
</script>
