// 在vue项目开发中，我们使用axios进行ajax请求，很多人一开始使用axios的方式，会当成vue-resoure的使用方式来用
// 即在主入口文件引入import VueResource from 'vue-resource'之后，直接使用Vue.use(VueResource)之后即可将该插件全局引用了
// 所以axios这样使用的时候就报错了，很懵逼。
// 仔细看看文档，就知道axios 是一个基于 promise 的 HTTP 库，axios并没有install 方法，所以是不能使用vue.use()方法的。
// 那么难道我们要在每个文件都要来引用一次axios吗？多繁琐！！！解决方法有很多种：
// 1.结合 vue-axios使用
// 2.axios 改写为 Vue 的原型属性
// 3.结合 Vuex的action
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from "axios";
import axiosVue from "axios-vue";
let app = createApp(App)

app.use(axiosVue,axios)
createApp(App).mount('#app')
