<template>
  <div :class="align">
    <div class="subheading grey--text mt-2">Rate the movie:</div>
    <v-rating
      v-model="localRating"
      color="yellow darken-3"
      background-color="grey darken-1"
      empty-icon="$vuetify.icons.ratingFull"
      half-increments
      hover
      @input="save"
    >
    </v-rating>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  
  props: {
    rating: { 
      type:Number,
      default: 0
    },
    align: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      localRating: null
    }
  },

  methods: {
    save() {
      this.$emit('changeRating', this.localRating)
    }
  },

  watch: {
    rating () {
      this.localRating = this.rating
    }
  }

}
</script>
