/*
 * @Descripttion:
 * @version:
 * @Author: wangmin
 * @Date: 2025-05-12 15:53:20
 * @LastEditors: wangmin
 * @LastEditTime: 2025-05-12 16:40:04
 */
import { createApp } from "vue";
import ElementPlus from "element-plus";
// import FcDesigner from "@form-create/designer";
import "element-plus/dist/index.css";
// import "./style.css";
import App from "./App.vue";
// import { TroyFormDesigner } from "../packages";

const app = createApp(App);

app.use(ElementPlus);
// app.use(TroyFormDesigner);
// app.use(FcDesigner);
// app.use(FcDesigner.formCreate);
app.mount("#app");
