<template>
  <div class="team">
    <h1 class="subheading grey--text">
      Users
    </h1>
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
                  :src="user.avatar"
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

            <ExistingMessage />

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ExistingMessage from '@/components/dialog/ExistingMessage'

export default {
  data: () => ({
    users: [
      { name: 'The Jack', role: 'Web Developer', avatar:"/assets/kisspng-computer-icons-user-account-symbol-clip-art-icon-mo-5b38a9723954d0.1097238515304400502348.jpg" },
      { name: 'Jo Jack', role: 'Web Developer', avatar:"/assets/kisspng-computer-icons-user-account-symbol-clip-art-icon-mo-5b38a9723954d0.1097238515304400502348.jpg" },
      { name: 'Dick', role: 'Web Developer', avatar:"/assets/kisspng-computer-icons-user-account-symbol-clip-art-icon-mo-5b38a9723954d0.1097238515304400502348.jpg" },
      { name: 'Momcilo', role: 'Web Developer', avatar:"/assets/kisspng-computer-icons-user-account-symbol-clip-art-icon-mo-5b38a9723954d0.1097238515304400502348.jpg" }
    ]
  }),
  components: {
    ExistingMessage
  }
}
</script>
