<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangmin
 * @Date: 2025-05-12 16:02:17
 * @LastEditors: wangmin
 * @LastEditTime: 2025-05-13 10:28:38
-->
<template>
  <div>
    <fc-designer
      ref="designer"
      :height="height"
      :mask="mask"
      :config="config"
      :handle="handle"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, withDefaults } from "vue";
import FcDesigner from "@form-create/designer";
import Zh from "@form-create/designer/locale/zh-cn.js";
// import En from "@form-create/designer/locale/en.js";

// const props = withDefaults(defineProps(), {
//   height: "100%",
//   mask: true,
//   menu: () => [],
//   config: () => ({
//     showSaveBtn: true,
//   }),
//   handle: () => [],
// });

const {
  height = "100vh",
  mask = true,
  menu = [],
  config = {
    showSaveBtn: true,
  },
  handle = [],
} = defineProps(["height", "mask", "menu", "config", "handle"]);

const designer = ref(null);
</script>

<style scoped></style>
