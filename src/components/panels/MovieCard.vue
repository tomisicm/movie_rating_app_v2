<template>
  <v-flex xs12 class="my-1 mx-1">
    <v-card 
      color="cyan darken-2"
      class="white--text"
      :to="{ name: 'movie', params: { id: movie._id }}"
    >
      <v-layout>
        <v-flex xs5>
          <v-img
            class="mx-1"
            :src="movie.avatar"
            height="125px"
            contain
          />
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>
            {{ movie.title }} - ({{ movie.release_year | formatDate }})
          </v-card-title>  
          <div class="px-4 py-2">
            {{ movie.genre }}
          </div>
        </v-flex>
      </v-layout>    
      <v-divider light />
      <v-card-actions class="pa-3">
        <v-flex>
          <v-icon>
            mode_comment
          </v-icon>
        </v-flex>
        <v-flex>
          {{ movie.commentCounter }} Comments
        </v-flex>
        <!-- <v-flex>
          <v-icon>
            star_rate
          </v-icon>
        </v-flex> -->
        <v-flex>
          Rating: {{ movie.rating }}
        </v-flex> 
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import dateToString from '@/mixins/dateToString'
/* import '@/assets/stylesheets/home.css' */

export default {
  name: 'MovieCard',
  mixins: [ dateToString ],
  props: {
    movie: Object,
    color: String
  }
}
</script>

<style>

</style>
