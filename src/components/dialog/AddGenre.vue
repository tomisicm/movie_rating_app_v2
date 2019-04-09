<template>
  <v-layout row justify-center>
    <v-btn color="primary" large @click.stop="dialog = true">
    <v-icon>add</v-icon>
      Add Genre
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card>
        <v-card-title class="headline">
          Add new Genre:
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-layout row class="my-4"> 
              <v-flex xs12 sm8 class="mx-4">
              <v-text-field
                v-model="genre.name"
                label="Genre name*"
                placeholder="Genre name goes here..."
                :rules="inputRules"
              />
              <v-switch v-model="genre.type" label="Literary Genre" value="Literary"></v-switch>
              <v-switch v-model="genre.type" label="Film Genre" value="Film"></v-switch>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer />
          <v-btn large color="primary" flat="flat"
            @click="dialog = false"
          >
            Cancel
          </v-btn>

          <v-btn large color="primary white--text" flat="flat"
            @click="addGenre"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import genreService from '@/utils/services/genre-service'

import { inputMixin } from '@/mixins/inputMixin'

  
export default {
  name: 'AddGenre',
  data: () => ({  
    dialog: false,
    genre: {
      name: '',
      type: []
    }
  }),
  mixins: [
    inputMixin
  ],
  methods: {
    addGenre () {
      genreService.createGenre(this.genre)
      this.dialog = false
    }
  }
}
</script>