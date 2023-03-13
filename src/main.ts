import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/es/message/style/css';

// createApp方法返回应用实例
const app = createApp(App);
// mount方法返回根组件实例
app.use(router).mount('#app');
// config配置项 errorHandler捕获错误
app.config.errorHandler = (err) => {
    console.log('捕获错误', err);
};
