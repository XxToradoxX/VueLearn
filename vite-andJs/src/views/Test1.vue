<template>
  <h1>Test1</h1>
  <el-card v-for="item in Formdata" :key="item.userId" style="min-width: 480px;min-height: 480px">
    <h1 style="text-align: center;line-height: 300px">{{item.userName}}</h1>
  </el-card>
</template>

<script setup>
import axios from "axios";
import {ref} from "vue";

const Formdata = ref([])
axios.post("http://localhost:8080/user").then(resp => {
  Formdata.value = resp.data.data
  console.log(Formdata)
  console.log(Formdata.value)
})
</script>

<style scoped>

</style>