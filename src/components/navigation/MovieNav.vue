<template>
  <nav class="text-xs-center">
  <v-toolbar
    flat
    color="#fafafa"
    dense
  >
  <v-toolbar-items
  >
    <v-btn
      flat
      :to="{ name: 'addmovies' }"
      >Add new Movie</v-btn>
    <v-btn
      flat
      :to="{ name: 'genre' }"
    >Add new Genre</v-btn>
      <v-btn flat>Add new Artists</v-btn>
    </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>
