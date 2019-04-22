<template>
  <div class="dashboard mt-3">
    <h1 class="subheading grey--text">
      Recently Added
    </h1>
  
    <v-container>
      <v-layout row class="my-4">
        <div class="display-1 grey--text">
          Movies
        </div>
      </v-layout>

      <MoviePanel/>


      <!-- <v-layout row class="my-4">
        <div class="display-1 grey--text">
          Books
        </div>
      </v-layout> -->
    </v-container>
  </div>
</template>

<script>
import MoviePanel from '@/components/panels/MoviePanel'


export default {
  name: 'Dashboard',
  components: {
    MoviePanel
  },
  data: () => ({
    
  })
}
</script>

<style scoped>
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
</style>

