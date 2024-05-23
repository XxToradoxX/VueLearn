<script setup>
import axios from "axios";

axios.post("http://localhost:8080/user").then(resp => {
  alert(resp.data.data)
})
</script>

<template>
  <RouterView/>
</template>

<style scoped>

</style>
