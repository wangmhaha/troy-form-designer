<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangmin
 * @Date: 2025-05-12 16:02:17
 * @LastEditors: wangmin
 * @LastEditTime: 2025-05-13 14:33:35
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
import { ref, defineProps, defineEmits, defineExpose } from "vue";
import FcDesigner from "@form-create/designer";

const emit = defineEmits(["onSave"]);

// 默认配置
const {
  height = "100vh",
  mask = true,
  config = {
    showSaveBtn: true,
    showJsonPreview: true,
    fieldReadonly: false,
    configFormOrder: ["base" | "props" | "validate" | "event" | "style"],
    com,
  },
  handle = [],
} = defineProps(["height", "mask", "menu", "config", "handle"]);

const designer = ref(null);

const handleSave = (data) => {
  emit("onSave", data);
};

// 暴露 designer 实例给父组件
defineExpose({
  $ref: designer,
});
</script>

<style scoped>
.el-main._fc-m-container a {
  /* display: none; */
}
</style>
