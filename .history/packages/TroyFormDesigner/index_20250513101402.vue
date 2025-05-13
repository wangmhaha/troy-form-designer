<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangmin
 * @Date: 2025-05-12 16:02:17
 * @LastEditors: wangmin
 * @LastEditTime: 2025-05-13 10:14:01
-->
<template>
  <div>
    <fc-designer
      ref="designer"
      :height="height"
      :locale="locale"
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
import En from "@form-create/designer/locale/en.js";

const props = defineProps({
  locale: {
    type: Object,
    default: Zh,
  },
  height: {
    type: String | Number,
    default: "100vh",
  },
  mask: {
    type: Boolean,
    default: true,
  },
  menu: {
    type: Array,
    default: () => [],
  },
  config: {
    type: Object,
    default: () => ({
      showSaveBtn: true,
    }),
  },
  handle: {
    type: Array,
    default: () => [],
  },
});
const designer = ref(null);
const locale = ref(Zh);

const defaultConfig = ref({
  locale: {},
  mask: true,
  height: "100vh",
});
</script>

<style scoped></style>
