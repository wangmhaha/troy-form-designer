<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangmin
 * @Date: 2025-05-12 16:02:17
 * @LastEditors: wangmin
 * @LastEditTime: 2025-05-12 16:04:18
-->
<template>
  <div>
    <fc-designer ref="designer" height="100vh" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import FcDesigner from "@form-create/designer";
const designer = ref(null);
</script>

<style scoped></style>
