<template>
  <nav v-if="!!getUser()">
    <v-toolbar flat app>
      <v-toolbar-side-icon
        class="grey--text"
        @click="drawer = !drawer"
      />
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
      </v-toolbar-title>
      <v-spacer />

      <Logout 
        :user="user"
      />

    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer" app class="indigo"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img :src="avatar" alt="user avatar">
          </v-avatar>
          <p class="white--text subheading mt-2">
            {{ user.name }}
          </p>
        </v-flex>
      </v-layout>

      <SideNav/>

    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

import SideNav from '@/components/navigation/SideNav'
import Logout from '@/components/navigation/Logout'

export default {
  data() { 
    return {
      drawer: false,
      user: this.getUser(),
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyd39HDX-f0b1t1Y53ezjeXAj0a2AVaK4DQFmN_cCvccZ-h_Y4" 
    }
  },
  methods: {
    ...mapGetters([
      'getUser', 'getErrors'
    ])
  },

  components: {
    SideNav, Logout
  },

  created() {
    this.getUser()
  }
}
</script>
