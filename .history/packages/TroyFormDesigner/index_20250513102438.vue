<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangmin
 * @Date: 2025-05-12 16:02:17
 * @LastEditors: wangmin
 * @LastEditTime: 2025-05-13 10:24:38
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
import { ref, defineProps } from "vue";
import FcDesigner from "@form-create/designer";
import Zh from "@form-create/designer/locale/zh-cn.js";
// import En from "@form-create/designer/locale/en.js";

const props = withDefaults(defineProps(), {
  height: "100vh",
  mask: true,
  menu: () => [],
  config: () => ({
    showSaveBtn: true,
  }),
  handle: () => [],
});

// const props = defineProps({
//   height: {
//     type: String | Number,
//     default: "100vh",
//   },
//   mask: {
//     type: Boolean,
//     default: true,
//   },
//   menu: {
//     type: Array,
//     default: () => [],
//   },
//   config: {
//     type: Object,
//     default: () => {
//       return {
//         showSaveBtn: true,
//       };
//     },
//   },
//   handle: {
//     type: Array,
//     default: () => [],
//   },
// });
const designer = ref(null);
</script>

<style scoped></style>
