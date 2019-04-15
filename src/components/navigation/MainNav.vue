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

      <v-list-tile :to="{ name: 'inbox' }">
        <v-icon right id='inbox'>inbox</v-icon>
        <div class="redicon white--text" v-if=" messageCounter > 0">
          <span class="decisiontext caption"> {{ messageCounter }}
          </span>  
        </div>
      </v-list-tile>

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
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyd39HDX-f0b1t1Y53ezjeXAj0a2AVaK4DQFmN_cCvccZ-h_Y4",
      messageCounter: 0
    }
  },
  methods: {
    ...mapGetters([
      'getUser', 'getErrors'
    ])
  },

  computed: {
    user() {
      return this.getUser()
    },
  },

  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    new_message: function (data) {
      
      if (data == this.user._id) {
        this.messageCounter ++
      }
      
    }
  },

  created () {
    /* does not work !
    this.sockets.subscribe(this.user.id, (data) => {
      if (data) {
        this.messageCounter ++
      }
    }) */
  },

  components: {
    SideNav, Logout
  }
}
</script>

<style>
#inbox {
  font-size: 30px
}

.redicon{
  width: 2px;
  height: 2px;
  position: absolute;
  top: 5px;
  right: 10px;
  background: red;
  padding:7px;
  box-sizing: border-box;
  border-radius: 100%;
}

.decisiontext {
  position: absolute;
  top: -8px;
  right: -2px;
  padding:6px;
  box-sizing: border-box;
  border-radius: 100%;
}
</style>

