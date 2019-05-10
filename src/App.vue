<template>
  <v-app class="gray lighten-4">
    <MainNav />

    <v-content class="mx-4 mb-4">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import MainNav from '@/components/navigation/MainNav.vue' 

export default {
  name: 'App',
  components: {
    MainNav
  },
  data: () => ({
    
  })
}
</script>
 
 