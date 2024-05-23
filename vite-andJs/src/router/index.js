import {createRouter, createWebHistory} from "vue-router";
import ttst from "../views/Ttst.vue"
import test1 from "../views/Test1.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            redirect:"/ttst"
        },
        {
            path: "/ttst",
            name: "ttst",
            component: ttst,
        },
        {
            path: "/ttst1",
            name: "ttst1",
            component: test1
        }
    ]
})

export default router