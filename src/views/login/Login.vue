<template>
<v-content class="mt-5">
  <v-container justify-center class="mt-5">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
    <div class="subheading mb-4 mx-4">Welcome. Please log in.</div>
      <v-flex
        xs6
        align-center
        justify-center
        class="mx-4 form-control"
      >
        <v-text-field
          v-model="user.email"
          label="Email"
          :rules="emailRule"
          required
        />
    
        <v-text-field
          v-model="user.password"
          label="Password"
          :rules="fieldIsRequiredRule"
          required
        />

        <v-layout align-center row wrap>  
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            class="primary"
            @click="onSubmit"
            right
            large
          >
            Submit
          </v-btn>

          <v-btn
            class="grey--text"
            @click="clear"
            right
            large
          >
            Clear
          </v-btn>
          <div class="subheading my-4 mx-2">If you do not have account yet, please register. </div>
        </v-layout>
          <v-btn
            class="grey--text my-4"
            outline
            block
            :to="{ name: 'register' }"
            large 
          >
          Go to the register page
          </v-btn>
      </v-flex>
    </v-form>
  </v-container>
  </v-content>
</template>

<style>

</style>

<script>
import { mapActions } from 'vuex'

import { inputMixin } from '@/mixins/inputMixin'


export default {
  data () {
    return {
      valid: true,
      user: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapActions(['login']),
    onSubmit () {
      if ( this.user.email == '' || this.user.password == '') return
      this.login(this.user)
    },
    clear () {
      this.$refs.form.reset()
    }
  },

  mixins: [ inputMixin ],
}
</script>
