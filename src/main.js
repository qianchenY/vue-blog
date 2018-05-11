// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

// 引入字体图标
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

router.beforeEach((to,from, next)=>{
    document.getElementsByTagName('title')[0].innerHTML = to.meta.title || to.name;
    next()
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
