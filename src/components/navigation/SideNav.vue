<template>
  <v-list>
    <v-list-tile :to="{ name: 'home' }">
      <v-list-tile-action>
        <v-icon class="white--text">
          dashboard
        </v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="white--text">
          Dashboard
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :to="{ name: 'movies' }">
      <v-list-tile-action>
        <v-icon class="white--text">
          local_movies
        </v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="white--text">
          Movies
        </v-list-tile-title>
      </v-list-tile-content>    
    </v-list-tile>

    <v-list-tile :to="{ name: 'books' }">
      <v-list-tile-action>
        <v-icon class="white--text">
          library_books
        </v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="white--text">
          Books
        </v-list-tile-title>
      </v-list-tile-content>    
    </v-list-tile>

    <v-list-tile :to="{ name: 'videos' }">
      <v-list-tile-action>
        <v-icon class="white--text">
          video_library
        </v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="white--text">
          Videos
        </v-list-tile-title>
      </v-list-tile-content>    
    </v-list-tile>

    <v-list-tile :to="{ name: 'users' }">
      <v-list-tile-action>
        <v-icon class="white--text">
          person
        </v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="white--text">
          Users
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>
