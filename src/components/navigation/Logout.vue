<template>
    <v-menu 
      open-on-hover nudge-bottom='50px' 
      offset-x origin='bottom right'
    >
      <template v-slot:activator="{ on }">
        <div v-on="on">
        <v-list-tile avatar class="text-md-right">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content right>
            <v-list-tile-title>{{ user.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </div>
      </template>

      <v-list class="text-md-right">
        <v-list-tile :to="{ name: 'me' }">
          <v-btn block flat color="grey">
          <span>Profile</span>
          </v-btn>
          <v-icon right>account_circle</v-icon>
        </v-list-tile>

        <v-list-tile :to="{ name: 'inbox' }">
          <v-btn block flat color="grey">
          <span>Inbox</span>
          </v-btn>
          <v-icon right>inbox</v-icon>
        </v-list-tile>

        <v-list-tile>
          <v-btn block flat color="grey" @click="onClick">
          <span>Signout</span>
          </v-btn>
          <v-icon right>exit_to_app</v-icon>
        </v-list-tile>
      </v-list>
    </v-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LogoutMenu',

  props: {
    user: Object
  },
  
  data () {
    return {
      avatar: "http://localhost:3000/api/user/5c92cf7089134046ad41fa80/avatar"
    }
  },
  
  methods: {
    onClick () {
      this.logout()
    },
    ...mapGetters([
      'getUser', 'getErrors'
    ]),
    ...mapActions([
      'logout'
    ])
  }
}
</script>

