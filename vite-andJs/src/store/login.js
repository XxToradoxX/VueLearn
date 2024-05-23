import {createPinia, defineStore} from "pinia";
import {ref} from "vue";

export const userLoginStore = defineStore("loginId", () => {
    //定义用户信息状态
    const userInfo = ref(JSON.parse(localStorage.getItem("userInfo")))

    //修改用户信息状态的方法
    const changeUserInfo = (params) => {
        userInfo.value = params
    }

    //返回用户信息的状态和方法
    return {
        userInfo,
        changeUserInfo
    }
})