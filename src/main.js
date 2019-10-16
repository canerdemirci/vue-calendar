import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextAreaAutoSize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore';

Vue.use(VueTextAreaAutoSize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBRti5OY9FfK1LuHRhRQMjZQ6a6RKBR5FQ",
  authDomain: "vue-calendar-62ae2.firebaseapp.com",
  databaseURL: "https://vue-calendar-62ae2.firebaseio.com",
  projectId: "vue-calendar-62ae2",
  storageBucket: "vue-calendar-62ae2.appspot.com",
  messagingSenderId: "739889015104",
  appId: "1:739889015104:web:11abe2f6361ea09bfd32a5"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
