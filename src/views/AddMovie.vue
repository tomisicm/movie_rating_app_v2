<template>
<div>
  <MoviesNav />
  
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-layout row class="my-4">
        <v-flex xs4>
          <v-img
            class="mx-1"
            src="https://images-na.ssl-images-amazon.com/images/I/51haNTHB7fL.jpg"
            contain
          />
        </v-flex>
        <v-flex xs8 class="mx-4">  
          <v-flex row wrap xs12 sm8>
            <v-text-field
              v-model="movie.title"
              label="Movie title*"
              placeholder="Movie title goes here..."
              :rules="inputRules"
            />
            <v-textarea
              v-model="movie.description"
              placeholder="Movie description goes here..."
              rows="3"
              auto-grow
              name="input-4-2"
            />
          </v-flex>

          <GenreList
            :genreslist="movie.genres"
            v-on:changeGenreList="updateGenreList($event)"
          />
          
          <StarList
            :starslist="movie.stars"
            v-on:changeStarsList="updateStarsList($event)"
          />

          <div class="subheading grey--text my-2 flex xs12 sm8">
            Notable Movie Awards:
          <v-textarea
            v-model="movie.awards"
            rows="3"
            auto-grow
            name="input-4-2"
          />
          </div>

          <div class="subheading grey--text my-2 flex xs12 sm8">
            Release Year:
            <Datepicker v-on:changeReleseYear.self="updateReleaseYear($event)"/>
          </div>

          <div class="subheading grey--text my-2 flex xs12 sm8">
            Comment section:
            <v-radio-group v-model="movie.commentSection" column>
              <v-radio color="primary" label="Open" value="open"></v-radio>
              <v-radio color="primary" label="Closed" value="closed"></v-radio>
            </v-radio-group>
          </div>

          <Rating
            v-on:changeRating="updateRating($event)" 
            class="xs12 sm8 my-2"
          />

          <v-flex row xs12 sm8>
            <v-spacer />
            <v-btn right large @click="$router.push({ name: 'movies' })">Cancel</v-btn>
            <v-btn right large color="primary white--text" @click="onSubmit">Submit</v-btn>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</div>
</template>

<script>
import movieService from '@/utils/services/movie-service'

import GenreList from '@/components/genre/GenreList'
import StarList from '@/components/star/StarList'
import MoviesNav from '@/components/navigation/MovieNav'
import Rating from '@/components/rating/Rating'
import Datepicker from '@/components/common/Datepicker'

import { inputMixin } from '@/mixins/inputMixin'

export default {
  name: 'Movie',
  data () { 
    return {
      valid: true,
      movie: {
        title: '',
        description: '',
        genres: [],
        stars: [],
        releaseYear: '',
        commentSection: 'open',
      },
      rating: 0
    }
  },

  methods: {
    updateReleaseYear (newReleseYear) {
      this.movie.releaseYear = newReleseYear
    },
    updateGenreList (newGenres) {
      this.movie.genres = newGenres
    },
    updateStarsList (newStars) {
      this.movie.stars = newStars
    },
    updateRating (newRating) {
      this.rating = newRating
    },
    onSubmit() {
      movieService.createMovie(this.movie, this.rating)
        .then(() => {
          this.$router.push({ name: 'movies' })
        })
    }
  },
  
  components: {
    GenreList, MoviesNav, StarList, Rating, Datepicker
  },
  mixins: [
    inputMixin
  ],
}
</script>
