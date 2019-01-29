import Vue from 'vue';
import App from './App.vue';
// import ctSelect from '../packages/index.js';
import ElementUI from 'element-ui';
import ctUI from '../lib/ss.common';
// var upload = require('../lib/ct-ui.umd');
// Vue.use(ctSelect);
Vue.use(ctUI);
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
    render: h => h(App)
}).$mount('#app');
