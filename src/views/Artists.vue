<template>
  <div>
  <MoviesNav />
  <v-card flat class="pa-3">
    <v-card-title class="title">
      Artists List:
      <v-spacer />
      
      <!-- <StarsDialog/> -->

      <v-btn color="primary" @click="addArtist">
      <v-icon>add</v-icon>
        Add Artist
      </v-btn>

      <v-text-field
        class="mx-2 px-4"
        :value="search"
        @input="onInput($event)"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>

    <v-data-table
      :disable-initial-sort="true"
      :headers="headers"
      :items="stars"
      item-key="_id"
      no-data-text="Search for artists"
    >
    <template v-slot:items="props">
      <td class="text-xs-center">
        {{ props.item.fullname }}
      </td>
      <!-- <td class="text-xs-center">
        {{ props.item.type.toString() | splitStringByComma }}
      </td> -->
      <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editArtist(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteArtist(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <v-alert
        v-slot:no-results
        :value="true"
        color="error"
        icon="warning"
      >
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
    
  </div>
</template>

<script>
import starService from '@/utils/services/star-service'

import splitString from '@/mixins/formatString'
import { inputMixin } from '@/mixins/inputMixin'
// import StarDialog from '@/components/dialog/StarDialog'
import MoviesNav from '@/components/navigation/MovieNav'

import _ from 'lodash'

import { eventBus } from '@/main'

export default {
  name:'ArtistPage',
  
  data () { 
    return {
      dialog: false,
      search: '',
      headers: [
        { text: 'Artist name', align: 'center', value: 'name' },
        /* { text: 'Artist Type', align: 'center', value: 'type' }, */
        { text: 'Actions', align: 'center', value: 'type', sortable: false }
      ],
      stars: [],

    }
  },

  methods: {
    getStars () {
      starService.searchForStarsorGetAll(this.search)
      .then(({data}) => {
        this.stars = data.docs
      })
    },

    onInput: 
      _.debounce(function (value) {
        this.search = value
      }, 2000),

    editArtist (artist) {
      eventBus.$emit('editartist', artist)
    },
    deleteArtist (artist) {
      eventBus.$emit('deleteartist', artist)
    },
    addArtist () {
      eventBus.$emit('addartist')
    }
  },

  watch: {
    search (val) {
      this.getStars(this.search)
    }
  },

  mixins: [
    splitString, inputMixin
  ],
  components: {
    MoviesNav, /* ArtistDialog */
  },
}
</script>
