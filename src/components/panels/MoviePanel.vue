<template>
  <v-layout row wrap>
    <v-flex xs4
      v-for="movie in movies"
      :key="movie._id"
    >
      <MovieCard
        :movie="movie"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import movieService from '@/utils/services/movie-service'
import MovieCard from '@/components/panels/MovieCard.vue'


/* import '@/assets/stylesheets/main.css' */

export default {
  name: 'MoviePanel',
  data: () => ({
    movies: []
  }),
  components: {
    MovieCard
  },
  /* props: {
    movies: Array
  }, */
  methods: {
    getSomeMovies() {
      movieService.getSome(1, 6)
      .then(({data}) => {
        this.movies = data.docs
      })
    }
  },
  created () {
    this.getSomeMovies()
  }
}
</script>

<style>
.container.fill-height {
    align-items: normal;
}
a.side_bar_link {
  text-decoration: none;
}
.card__title--primary, .card__text {
  text-align: left;
}
.card {
  height: 100% !important;
}
</style>
