<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangmin
 * @Date: 2025-05-12 16:02:17
 * @LastEditors: wangmin
 * @LastEditTime: 2025-05-13 11:13:35
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
import { ref, defineProps, defineEmits } from "vue";
import FcDesigner from "@form-create/designer";

const emit = defineEmits(["onSave"]);
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
  emit("onSave", data);
};
</script>

<style scoped></style>
