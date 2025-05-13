<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangmin
 * @Date: 2025-05-12 15:53:20
 * @LastEditors: wangmin
 * @LastEditTime: 2025-05-13 11:10:37
-->
<script setup>
import { TroyFormDesigner } from "../packages";
import { ref } from "vue";
// 可以在此处获取设计器实例或进行其他操作
const designer = ref(null);

const handleSave = (data) => {
  console.log("123123", data);
};
</script>

<template>
  <div class="container">
    <troy-form-designer ref="designer" @onSave="handleSave" />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
}
</style>
