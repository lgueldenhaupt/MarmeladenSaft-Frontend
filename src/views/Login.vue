<template>
  <v-container fluid>
    <v-layout
      column
      align-center
    >
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <v-form>
              <v-container fluid>
                <v-layout column>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-text-field
                      v-model="username"
                      label="Username"
                      required
                    />
                  </v-flex>

                  <v-flex
                    xs12
                    md4
                  >
                    <v-text-field
                      v-model="password"
                      label="Password"
                      type="password"
                      required
                    />
                  </v-flex>

                  <v-btn
                    color="success"
                    @click="login"
                  >
                    LOGIN
                  </v-btn>
                  <v-flex
                    xs12
                    md4
                  >
                    <small>Don't have an account? <a>Sign up</a></small>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-snackbar
      v-model="snackbar.show"
      :timeout="snackbar.timeout"
      top
    >
      {{ snackbar.text }}
      <v-btn
        flat
        @click="snackbar.show = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>

import Api from '../modules/masaApi';

export default {

  data: () => ({
    username: '',
    password: '',
    snackbar: {
      text: 'Login succesfull',
      timeout: 3000,
      show: false,
    },
  }),

  mounted() {
  },
  methods: {
    register() {
      Api.register({
        username: 'Ralfes', password: 'root', firstName: 'Ralle', lastName: 'Kalle',
      })
        .then((res) => {
          this.snackbar.text = 'Successfully registered';
          this.snackbar.show = true;
        }).catch((err) => {
          this.snackbar.text = err.response;
          this.snackbar.show = true;
        });
    },
    login() {
      Api.authenticate(this.username, this.password)
        .then((res) => {
          this.$cookies.set('auth_token', res.data.token);
          this.snackbar.text = 'Login successful';
          this.snackbar.show = true;
        }).catch((err) => {
          this.snackbar.text = err.response;
          this.snackbar.show = true;
        });
    },
  },
};
</script>
