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
