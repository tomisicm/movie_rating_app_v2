<template>
  <v-container justify-center class="mt-5">
    <v-content class="mt-5">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
    <div class="subheading mb-4 mx-4">Welcome. Please fill in the Username, Email and Password fields.</div>
      <v-flex xs6 align-center justify-center class="mx-4">
        <v-text-field
          v-model="user.name"
          label="Username"
          :rules="fieldIsRequiredRule"
          required
        />

        <v-text-field
          v-model="user.email"
          label="Email"
          :rules="emailRule"
          required
        />

        <v-text-field
          v-model="user.password"
          :rules="fieldIsRequiredRule"
          name="input-7-1"
          label="Password"
          required
        />

        <v-text-field
          v-model="confirm_password"
          :rules="fieldIsRequiredRule"
          name="input-7-1"
          label="Confirm Password"
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
        </v-layout>
        <v-btn
          class="grey--text my-4"
          outline
          block
          :to="{ name: 'login' }"
          large 
        >
          Go to the login page
        </v-btn>
      </v-flex>
    </v-form>
    </v-content>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

import { inputMixin } from '@/mixins/inputMixin'

export default {
  data () {
    return {
      valid: true,
      user: {
        name: '',
        email: '',
        password: ''
      },
      confirm_password: ''
    }
  },
  methods: {
    ...mapActions(['register']),
    onSubmit () {
      this.register(this.user)
    },
    clear () {
      this.$refs.form.reset()
    }
  },

  mixins: [ inputMixin ]
}
</script>
