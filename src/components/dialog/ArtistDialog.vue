<template>  
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-card-title class="headline">
        {{ eventType }} Artist:
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-layout row class="my-4"> 
            <v-flex xs12 sm8 class="mx-4">
            <v-text-field
              v-model="localArtist.name.first"
              label="First Name"
              placeholder="First name goes here..."
              :rules="inputRules"
            />
            <v-text-field
              v-model="localArtist.name.last"
              label="Last Name"
              placeholder="Last name goes here..."
              :rules="inputRules"
            />
            
            <v-checkbox v-model="localArtist.profession" label="Actor/Actress" value="Actor/Actress"></v-checkbox>
            <v-checkbox v-model="localArtist.profession" label="Writer" value="Writer"></v-checkbox>
            <v-checkbox v-model="localArtist.profession" label="Compositor" value="Compositor"></v-checkbox>
            <v-checkbox v-model="localArtist.profession" label="Director" value="Director"></v-checkbox>

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
import starService from '@/utils/services/star-service'

import { inputMixin } from '@/mixins/inputMixin'

import { eventBus } from '@/main'

export default {
  name: 'ArtistDialog',

  data () { 
    return {
      dialog: false,
      localArtist: {
        name: {
          first: null,
          last: null,
        },
        profession: []
      },
      eventType: ''
    }
  },
  
  methods: {
    onSubmit () {
      if (this.eventType === 'Submit') {
      starService.createStar(this.localArtist).then(() => {
          this.resetArtist()
        }
      )}
      if (this.eventType === 'Confirm') {
        starService.editStar(this.localArtist.id, this.localArtist).then(() => {
          this.resetArtist()
        }
      )}
      if (this.eventType === 'Delete') {
        starService.deleteStar(this.localArtist.id).then(() => {
        this.resetArtist()
        }
      )}
    },
    onCancel () {
      this.resetArtist()
    },
    resetArtist () {
      this.localArtist._id = null
      this.localArtist.name.first = '',
      this.localArtist.name.last = '',
      this.localArtist.profession = []
      this.dialog = false
    },
    formatedArtist (artist) {
      // just for giggles. some objects in db did not have the given property
      // so i gave them one.
      if (!artist.hasOwnProperty('profession')) {
        artist = {...artist, profession: []}
      }
      
      return artist
    }
  }, 

  created () {
    eventBus.$on('addartist', () => {
      this.eventType = 'Submit'
      this.dialog = true
    })
    eventBus.$on('editartist', (data) => {
      this.eventType = 'Confirm'
      this.dialog = true
      this.localArtist={...this.formatedArtist(data)}
    })
    eventBus.$on('deleteartist', (data) => { 
      this.eventType = 'Delete'
      this.dialog = true
      this.localArtist={...this.formatedArtist(data)}
    })
  },

  mixins: [
    inputMixin
  ]
}
</script>