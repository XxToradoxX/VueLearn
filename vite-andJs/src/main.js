import axios from "axios";
import vueAxios from 'vue-axios'
import {createApp} from 'vue'
import {createPinia} from "pinia";
import './style.css'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const pinia = createPinia()
let app = createApp(App)

app.use(vueAxios, axios)
app.use(router)
app.use(pinia)
app.use(ElementPlus)

app.mount('#app')
