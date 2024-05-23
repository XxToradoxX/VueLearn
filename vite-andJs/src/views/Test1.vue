<template>
  <h1>Test1</h1>
  {{Formdata}}
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