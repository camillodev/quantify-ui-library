import Vue from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// Add all solid icons to the library

Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
