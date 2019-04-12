<template>
  <v-layout row>
    <v-spacer></v-spacer>
    <v-btn 
      right fab dark color="primary"
      @click.stop="dialog = true"
    >
    <v-icon dark>add</v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="500"
      @keydown.esc="dialog = false"
    >
      <v-card height="500px">
        <v-card-title class="headline">
          <!-- -->

          <UserList />

          <!-- -->
          <v-spacer/>

        </v-card-title>
        <v-divider />

        <v-card-text>


        </v-card-text>
        <v-divider />

        <v-card-actions>
        <div class="typer">


        </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import UserList from '@/components/messages/UserList'

export default {
  data: () => ({
    dialog: false,
    
  }),

  components: {
    UserList
  }

}
</script>

<style>
.typer {
    box-sizing: border-box;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    bottom: 0, important!;
    height: 4.9rem;
    width: 100%;
}
.speech-bubble {
	position: relative;
	background: #006f79e5;
	border-radius: .4em;
    width: 100%;
    padding: 20px;
    margin: 1em 0;
    text-align: center;
}


hgroup {
    display: block;
    
}
</style>
