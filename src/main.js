import Vue from 'vue'
import VueRouter from 'vue-router'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import App from './App.vue'

import Home from './components/Home.vue'
import BroshesList from './components/BroshesList.vue'
import BroshItem from './components/BroshItem.vue'

Vue.use(VueRouter)
Vue.use(firestorePlugin)
Vue.config.productionTip = false

firebase.initializeApp({
	apiKey: "AIzaSyCL3wXwSWPpgZxCK0FXfy9aBHeqAV9oxfo",
    authDomain: "broshmne.firebaseapp.com",
	projectId: 'broshmne',
	databaseURL: 'https://broshmne.firebaseio.com'
})

export const db=firebase.firestore()

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/broshes',
			component: BroshesList,
			children: [
				{
					path: ':code',
					name: 'brosh',
					component: BroshItem
				}
			]
		}
	]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
