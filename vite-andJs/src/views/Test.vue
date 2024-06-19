<template>
  <el-button @click="getall">返回list</el-button>
  <el-table :data="dableData">
    <el-table-column prop="bookId"/>
    <el-table-column prop="bookName"/>
    <el-table-column prop="bookCode"/>
  </el-table>
</template>

<script setup>
import axios, {Axios} from "axios";
import {reactive, ref} from "vue";

const dableData = reactive({
  "bookId":"1",
  "bookName":"",
  "bookCode":""
});

const getall = () => {
  axios({
    method: "post",
    url: "http://localhost:8080/book/book"
  }).then(resp => {
    console.log(resp.data)
    dableData.bookId = resp.data.bookId;
    dableData.bookName = resp.data.bookName;
    dableData.bookCode = resp.data.bookCode;
  })
}
</script>

<style scoped>

</style>