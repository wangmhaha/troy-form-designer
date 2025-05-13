<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangmin
 * @Date: 2025-05-12 15:53:20
 * @LastEditors: wangmin
 * @LastEditTime: 2025-05-13 11:30:36
-->
<script setup>
import { TroyFormDesigner, TroyFormCreate } from "../packages";
import { ref, onMounted } from "vue";
// 可以在此处获取设计器实例或进行其他操作
const designer = ref(null);
const formData = ref({});
const api = ref({});
const option = ref(
  formCreate.parseJson(
    '{"form":{"inline":false,"hideRequiredAsterisk":false,"labelPosition":"right","size":"default","labelWidth":"125px"},"resetBtn":{"show":false,"innerText":"重置"},"submitBtn":{"show":true,"innerText":"提交"}}'
  )
);
const rule = ref(
  formCreate.parseJson(
    '[{"type":"input","field":"Fiyvmalyc6mgabc","title":"输入框","info":"","$required":false,"_fc_id":"id_Fz8zmalyc6mgacc","name":"ref_Fmiimalyc6mgadc","display":true,"hidden":false,"_fc_drag_tag":"input"},{"type":"input","field":"Ftjomalyc7i6aec","title":"多行输入框","info":"","$required":false,"props":{"type":"textarea"},"_fc_id":"id_Fufjmalyc7i6afc","name":"ref_Fyfwmalyc7i6agc","display":true,"hidden":false,"_fc_drag_tag":"textarea"}]'
  )
);

const onSubmit = (formData) => {
  //todo 提交表单
  console.log("123123", formData);
};

const handleSave = (data) => {
  console.log("123123", data);
};

onMounted(() => {
  // 访问 fc-designer 实例
  console.log("fc-designer 实例:", designer.value.$ref);

  // 示例：调用 fc-designer 的方法
  // designer.value.designer.value.someMethod()
});
</script>

<template>
  <div class="container">
    <troy-form-designer ref="designer" @onSave="handleSave" />
    <!-- <troy-form-create
      v-model="formData"
      v-model:api="api"
      :rule="rule"
      :option="option"
      @submit="onSubmit"
    /> -->
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
}
</style>
