// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import $ from 'jquery'
import 'font-awesome/css/font-awesome.css'
import Routes from './routes'



Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
/* eslint-disable no-new */

/*自定义指令*/
Vue.directive('rainbow',{
	bind(el,binding,vnode){
		el.style.color = '#'+ Math.random().toString(16).slice(2,8);
		
	}
})
Vue.directive('theme',{
	bind(el,binding,vnode){
		if (binding.value == 'wide') {
			el.style.maxWidth="500px";
		}
	}
})
Vue.filter("to-uppercase",function(value) {
	return value.toUpperCase();
});

// Vue.filter("snippet",function(value) {
// 	return value.slice(0,100)+"...";
// });
// Vue.filter("title-snippet",function(value) {
// 	return value.slice(0,100)+"...";
// });

//路由
const router =new VueRouter({
	routes:Routes,
	mode:"history"
})


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
