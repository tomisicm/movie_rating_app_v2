<template>
  <v-layout
    row
    justify-center
  >
  <v-btn
    flat
    color="grey"
    @click.stop="dialog = true"
  >
    <v-icon small left>
      message
    </v-icon>
    <span>Send Message</span>
  </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="500"
      @keydown.esc="dialog = false"
    >
      <v-card height="500px">
        <v-card-title class="headline">
          <v-responsive class="pt-4">
            <v-avatar
              left
              size="50"
              class="grey lighten-2"
            >
              <img
                :src="user.avatar"
                alt="user avatar"
              >
            </v-avatar>
            <span class="mx-4 title font-weight-light">{{user.name}}</span>  
          </v-responsive>
          <v-spacer/>
          <button class="v-btn--flat v-btn--small theme--light"
              small
              flat="flat"
              @click="dialog = false"
          >
          <v-icon>close</v-icon>
          </button>
        </v-card-title>

        <v-card-text>
        <div class="mr-4">
          <hgroup class="speech-bubble white--text text-sm-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae natus, vero doloremque placeat earum facere, voluptatibus nostrum laboriosam perferendis harum animi ratione numquam ut? Fugit consectetur at doloremque accusamus tenetur?
          </hgroup>
        </div>
          
        <div class="ml-4">
          <hgroup class="speech-bubble white--text text-sm-left">
          Voluptatibus nostrum laboriosam perferendis harum animi ratione numquam ut? Fugit consectetur at doloremque accusamus tenetur?
          </hgroup>
        </div>
        </v-card-text>

        <v-divider />
        <v-card-actions>
        

        <div class="typer">
          <v-text-field
            @keyup.enter="dialog = false"
            box
            append-icon="send"
          ></v-text-field>
          <!-- <v-btn
            @click="dialog = false"
            color="indigo"
            flat="flat"
            large
          >
            <v-icon>send</v-icon>
          </v-btn> -->
        </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    user: { name: 'The Jack', role: 'Web Developer', avatar:"/assets/kisspng-computer-icons-user-account-symbol-clip-art-icon-mo-5b38a9723954d0.1097238515304400502348.jpg" },
  })
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
