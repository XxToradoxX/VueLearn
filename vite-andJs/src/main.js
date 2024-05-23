import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import axios from "axios";
import axiosVue from "axios-vue";
import router from "./router";
import {createPinia} from "pinia";

const pinia = createPinia()
let app = createApp(App)

app.use(router)
app.use(axiosVue, axios)
app.use(pinia)

app.mount('#app')
