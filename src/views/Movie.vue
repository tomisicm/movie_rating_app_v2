<template>
  <v-container>
    <v-layout row class="my-4">
      <v-flex xs4>
        <v-img
          class="mx-1"
          src="https://images-na.ssl-images-amazon.com/images/I/51haNTHB7fL.jpg"
          contain
        />

        
        <Rating
          align="text-xs-center"
          :rating="rating"
          v-on:changeRating="updateRating($event)" 
          class="xs12 sm8"
        />
      </v-flex>

      <v-flex xs8 class="mx-4">
        <div class="display-1 grey--text mb-4">
          {{ movie.title }}
        <span class="headline grey--text mb-4">({{ movie.releaseYear | formatDate }})</span>
        </div>
        <div>
          {{ movie.description }}
        </div>
        <div class="subheading grey--text my-2">
          Genre:
        </div>
        <span>{{ genreAsString | splitStringByComma }}</span>
        <div class="subheading grey--text my-2">
          Cast:
        </div>
        <span>{{ starsAsString | splitStringByComma }} </span>
        <div class="subheading grey--text my-2">
          Awards:
        </div>
        <span>Nothing of Major Importance</span>
        <div class="subheading grey--text my-2">
          Average Rating
        </div>
        <span>4.2</span>
      </v-flex>
    </v-layout>
    <div class="subheading grey--text my-2">
      Comment section:
    </div>
    <v-divider />
    <CommentSection />
  </v-container>
</template>

<script>
import movieService from '@/utils/services/movie-service'
import ratingService from '@/utils/services/rating-service'

import dateToString from '@/mixins/dateToString'
import formatString from '@/mixins/formatString'

import Rating from '@/components/rating/Rating'
import CommentSection from '@/components/comments/CommentSection'

export default {
  name: 'Movie',
  
  data: () => ({
    movie: {
      
    },

    comments: [],
    
    rating: null,
  }),

  created () {
    movieService.getMovie(this.$route.params.id)
    .then(({data}) => { this.movie = data })

    ratingService.getRatingByItemId(this.$route.params.id)
    .then(({data}) => { 
      if (data.value >= 0) {
        this.rating = data.value
      }
    })
  },

  computed: {
    genreAsString () {
      return this.movie.genres ? this.movie.genres.map(o => o.name).toString() : ''
    },
    starsAsString () {
      return this.movie.stars ? this.movie.stars.map(o => o && o.name.first + ' ' + o.name.last).toString() : ''
    }
  },

  methods: {
    updateRating (newRating) {
      this.rating = newRating
      ratingService.createRating({value: this.rating, item: this.$route.params.id})
      /* .then(({data}) => {}) */
    }
  },

  components: {
    CommentSection, Rating
  },

  mixins: [ dateToString, formatString ],
}
</script>
