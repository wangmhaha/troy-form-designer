<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangmin
 * @Date: 2025-05-12 15:53:20
 * @LastEditors: wangmin
 * @LastEditTime: 2025-05-12 16:37:55
-->
<script setup>
// import { TroyFormDesigner } from "../packages";
import { ref } from "vue";
// 可以在此处获取设计器实例或进行其他操作
const designer = ref(null);
</script>

<template>
  <div id="app">
    <fc-designer ref="designer" height="100vh" />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
}
</style>
