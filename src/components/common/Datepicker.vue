<template>
  <v-layout row wrap>
    <v-flex xs11 sm5>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="300px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          type="month"
          no-title
          scrollable
        >
        <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    /* props: {
      release_date: {
        type: String,
        default: new Date().toISOString().substr(0, 7)
      }
    },*/
    data () {
      return {
        date: null,
        selectedDate: '',
        menu: false
      }
    },
    computed: {
      
    },
    methods: {
      save() {
        this.selectedDate = this.$refs.menu.save(this.date)
        this.$emit('changeReleseYear', this.date)
      }  
    }
  }
</script>