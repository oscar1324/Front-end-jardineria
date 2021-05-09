import Vue from 'vue'
import App from './App.vue'
import { createApp } from 'vue'
import Vuelidate from 'vuelidate';
import router from './router'

// Revidar error validación
//Vue.use(Vuelidate);
createApp(App).use(router).mount('#app')
