import {createRouter, createWebHistory} from "vue-router";
import ttst from "../views/Test.vue"
import test1 from "../views/Test1.vue"
import test2 from "../views/PPG.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            redirect:"/ppg"
        },
        {
            path: "/ttst",
            name: "ttst",
            component: ttst,
            meta:{
                title:"ttst"
            }
        },
        {
            path: "/ttst1",
            name: "ttst1",
            component: test1,
            meta:{
                title:"test1"
            }
        },
        {
            path: "/ppg",
            name: "ttst2",
            component: test2,
            meta:{
                title:"ppg"
            }
        }
    ]
})

export default router