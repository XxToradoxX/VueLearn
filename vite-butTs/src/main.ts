//ts好像不能用axiosVue引用
import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import axios from "axios";
import axiosVue from "axios-vue";

let app = createApp(App)
app.use(axiosVue, axios)
createApp(App).mount('#app')
