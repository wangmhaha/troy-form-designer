<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangmin
 * @Date: 2025-05-12 16:02:17
 * @LastEditors: wangmin
 * @LastEditTime: 2025-05-13 10:53:24
-->
<template>
  <div>
    <fc-designer
      ref="designer"
      :height="height"
      :mask="mask"
      :config="config"
      :handle="handle"
      @save="handleSave"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import FcDesigner from "@form-create/designer";

const {
  height = "100vh",
  mask = true,
  config = {
    showSaveBtn: true,
  },
  handle = [],
} = defineProps(["height", "mask", "menu", "config", "handle"]);

const designer = ref(null);

const handleSave = (data) => {
  console.log(data);
};
</script>

<style scoped></style>
