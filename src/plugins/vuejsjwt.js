import Vue from 'vue';
import VueJWT from 'vuejs-jwt';


Vue.use(VueJWT, {
  signKey: process.env.VUE_APP_JWT_SECRET,
  storage: 'cookie',
});
