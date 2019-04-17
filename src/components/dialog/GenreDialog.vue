<template>  
    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card>
        <v-card-title class="headline">
          {{ eventType }} Genre:
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-layout row class="my-4"> 
              <v-flex xs12 sm8 class="mx-4">
              <v-text-field
                v-model="localGenre.name"
                label="Genre name*"
                placeholder="Genre name goes here..."
                :rules="inputRules"
              />
              <v-switch v-model="localGenre.type" label="Literary Genre" value="Literary"></v-switch>
              <v-switch v-model="localGenre.type" label="Film Genre" value="Film"></v-switch>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer />
          <v-btn large color="primary" flat="flat"
            @click="onCancel"
          >
            Cancel
          </v-btn>

          <v-btn large color="primary white--text" flat="flat"
            @click="onSubmit"
          >
            {{ eventType }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import genreService from '@/utils/services/genre-service'

import { inputMixin } from '@/mixins/inputMixin'

import { eventBus } from '@/main'

export default {
  name: 'GenreDialog',

  data () { 
    return {
      dialog: false,
      localGenre: 
      {
        name: '',
        type: []
      },
      eventType: ''
    }
  },
  
  methods: {
    onSubmit () {
      // Mistake. Async call. The resetGenre() happened 
      // before the actual call was made
      // solutions: .then or _delay or setTimeout
      if (this.eventType === 'Submit') {
      genreService.createGenre(this.localGenre).then(() => {
        this.resetGenre()
        }
      )}
      if (this.eventType === 'Confirm') {
        genreService.editGenre(this.localGenre._id, this.localGenre).then(() => {
        this.resetGenre()
        }
      )}
      if (this.eventType === 'Delete') {
        genreService.deleteGenre(this.localGenre._id).then(() => {
        this.resetGenre()
        }
      )}
    },
    onCancel () {
      this.resetGenre()
    },

    resetGenre () {
      this.localGenre.name = '',
      this.localGenre.type = []
      this.localGenre._id = null
      this.dialog = false
    }
  }, 

  created () {
    eventBus.$on('addgenre', () => {
      this.eventType = 'Submit'
      this.dialog = true
    })
    eventBus.$on('editgenre', (data) => {
      this.eventType = 'Confirm'
      this.dialog = true
      this.localGenre={...data}
    })
    eventBus.$on('deletegenre', (data) => { 
      this.eventType = 'Delete'
      this.dialog = true
      this.localGenre={...data}
    })
  },

  mixins: [
    inputMixin
  ]
}
</script>