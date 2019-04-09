<template>
  <div>
  <MoviesNav />
  <v-card flat class="pa-3">  
    <v-card-title>
      Genres List:
      <v-spacer />
      <AddGenre />
      <v-text-field
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

import AddGenre from '@/components/dialog/AddGenre'
import MoviesNav from '@/components/navigation/MovieNav'

export default {
  name:'GenresPage',
  
  data: () => ({
    search: '',
    headers: [
      { text: 'Genre name', align: 'center', value: 'name' },
      { text: 'Genre Type', align: 'center', value: 'type' }
    ],
    genres: [],
    genre: {
      name: ''
    }
  }),

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
    }
  },

  computed: {
    
  },
  
  created () {
    this.getAllGenres()
  },
  
  mixins: [
    splitString
  ],
  components: {
    MoviesNav, AddGenre
  },
}
</script>
