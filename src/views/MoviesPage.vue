<template>
  <div>
    <MoviesNav />
    <h1 class="subheading grey--text">
      This is the movies page
    </h1>
    <v-container class="my-5">
      <v-card
        flat
        class="pa-3"
      >  
        <v-card-title>
          Movies:
          <v-spacer />
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
          :items="movies"
          item-key="_id"
          :search="search"
          :custom-filter="customFilter"
        >
          <template v-slot:items="props">
            <td class="text-xs-center">
              <v-list-tile :to="{ name: 'movie', params: { id: props.item._id }}">
                {{ props.item.title }}
              </v-list-tile>
            </td>
            <td class="text-xs-center">
              {{ props.item.genres.map(o => o && o.name) }}
            </td>
            <td class="text-xs-center">
              {{ props.item.release_year | formatDate }}
            </td>
            <td :class="`text-xs-center ${props.item.commentSection}`">
              <v-card
                :class="`chip ${props.item.commentSection} white--text`"
              >
                {{ props.item.commentSection }}
              </v-card>
            </td>
            <td class="text-xs-center">
              {{ props.item.createdBy.name }}
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
    </v-container>
  </div>
</template>

<script>
import movieService from './../utils/services/movie-service'
import dateToString from '@/mixins/dateToString'


import MoviesNav from '@/components/navigation/MovieNav'

export default {
  name: 'Moives',

  data: () => ({
    search: '',
    headers: [
      { text: 'Movie title', align: 'center', value: 'title' },
      { text: 'Genre', align: 'center', value: 'genres' },
      { text: 'Release Year', align: 'center', value: 'releaseYear' },
      { text: 'Comment Section', align: 'center', value: 'commentSection', width: '45px' },
      { text: 'Person', align: 'center', value: 'name' }
    ],
    movies: []
  }),

  methods: {
    getAllMovies () {
      movieService.getAll()
      .then(({data}) => {
        this.movies = data
      })
    },
    /* customFilter(items, search, filter) {
      search = search.toString().toLowerCase()
      return items.filter(row => filter(row['title', 'commentSection'], search));
    }, 
    */
    customFilter(items, search, filter) {
      search = search.toString().toLowerCase();
      return items.filter(i => (
        Object.keys(i).some(j => filter(i[j], search))
      ))
    },
    getGenresArray(genres) {
      return genres.map(o => o && o.name)
    }
  },

  created () {
    this.getAllMovies()
  },

  components: {
    MoviesNav
  },
  mixins: [ dateToString ]
}
</script>


<style>
.movie.open {
  border-left: 6px solid #3cd1c2;
}
.movie.closed {
  border-left: 6px solid #d14a4a;
}
.movie.ongoing {
  border-left: 6px solid #2ada6d;
}
.chip.open {
  background:  #3cd1c2;
}
.chip.closed {
  background:  #d14a4a;
}
.chip.ongoing {
  background:  #2ada6d;
}
td.text-xs-center {
  text-align: left, !important;
}

</style>

