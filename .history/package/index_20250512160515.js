/*
 * @Descripttion:
 * @version:
 * @Author: wangmin
 * @Date: 2025-05-12 15:57:27
 * @LastEditors: wangmin
 * @LastEditTime: 2025-05-12 16:05:14
 */
import TroyFormDesigner from "./TroyFormDesigner";

// 定义 install 方法，接收 app 作为参数
const install = (app) => {
  app.component("troy-form-designer", TroyFormDesigner);
};

// 导出插件对象
export default {
  install,
};

// 导出单个组件
export { TroyFlowEngine };
