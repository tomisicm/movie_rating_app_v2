<template>
  <div class="team">
    <h1 class="subheading grey--text">Users</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 lg3
          v-for="user in users"
          :key="user.name"
        >
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar
                size="100"
                class="grey lighten-2"
              >
                <img
                  :src="avatar"
                  alt="user avatar"
                >
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ user.name }}
              </div>
              <div class="grey--text">
                {{ user.role }}
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import userService from '@/utils/services/user-service'

/* import ExistingMessage from '@/components/dialog/ExistingMessage' */

export default {
  data () { 
    return {
      avatar: 'https://spng.pngfly.com/20181205/cli/kisspng-vector-graphics-computer-icons-user-profile-portab-writer-recommend-svg-png-icon-free-download-9768-5c0851b140e792.0406469415440490732659.jpg',
      search: '',
      users: []
    }
  },

  created() {
    userService.searchForUsers(this.search)
      .then(({data}) => {
        this.users = data.docs
      })
  },

  components: {
    /* ExistingMessage */
  }
}
</script>
