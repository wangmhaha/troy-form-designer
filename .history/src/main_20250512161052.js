/*
 * @Descripttion:
 * @version:
 * @Author: wangmin
 * @Date: 2025-05-12 15:53:20
 * @LastEditors: wangmin
 * @LastEditTime: 2025-05-12 16:10:52
 */
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";
import { TroyFormDesigner } from "../packages";

const app = createApp(App);

app.use(ElementPlus);
app.use(TroyFormDesigner);
app.mount("#app");
