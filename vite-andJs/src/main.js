import axios from "axios";
import vueAxios from 'vue-axios'
import {createApp} from 'vue'
import {createPinia} from "pinia";
import './style.css'
import App from './App.vue'
import router from "./router";



const pinia = createPinia()
let app = createApp(App)

app.use(vueAxios, axios)
app.use(router)
app.use(pinia)

app.mount('#app')
