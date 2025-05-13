<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangmin
 * @Date: 2025-05-12 15:53:20
 * @LastEditors: wangmin
 * @LastEditTime: 2025-05-13 14:28:07
-->
<script setup>
import { TroyFormDesigner, TroyFormCreate } from "../packages";
import { ref, onMounted } from "vue";
// 可以在此处获取设计器实例或进行其他操作
const designer = ref(null);
const formData = ref({});
const api = ref({});
const option = ref(
  TroyFormCreate.parseJson(
    '{"form":{"inline":false,"hideRequiredAsterisk":false,"labelPosition":"right","size":"default","labelWidth":"125px"},"resetBtn":{"show":false,"innerText":"重置"},"submitBtn":{"show":true,"innerText":"提交"},"formData":{"name":"100"}}'
  )
);
const rule = ref(
  TroyFormCreate.parseJson(
    '[{"type":"input","field":"name","title":"名称","info":"","$required":false,"props":{"disabled":false,"type":"text"},"_fc_id":"id_Fz6tmalz6bbcafc","name":"ref_Fx6ymalz6bbcagc","display":true,"hidden":false,"_fc_drag_tag":"input","control":[{"handle":"[[FORM-CREATE-PREFIX-function(val, api) {\\n    return false;\\n  }-FORM-CREATE-SUFFIX]]","method":"if","rule":["name"]}]},{"type":"input","field":"Fqfzmam3zcdaapc","title":"多行输入框","info":"","$required":false,"props":{"type":"textarea"},"_fc_id":"id_Fkcamam3zcdaaqc","name":"ref_F3xymam3zcdaarc","display":true,"hidden":false,"_fc_drag_tag":"textarea"},{"type":"inputNumber","field":"Fwpbmam3zf55asc","title":"计数器","info":"","$required":false,"_fc_id":"id_Fow9mam3zf55atc","name":"ref_F5y0mam3zf55auc","display":true,"hidden":false,"_fc_drag_tag":"inputNumber"}]'
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
    <!-- <troy-form-designer ref="designer" @onSave="handleSave" /> -->
    <troy-form-create
      v-model="formData"
      v-model:api="api"
      :rule="rule"
      :option="option"
      @submit="onSubmit"
    />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
}
</style>
