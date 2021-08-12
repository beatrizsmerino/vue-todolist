import Vue from 'vue'
import Vuex from 'vuex'



// LOAD VUEX
Vue.use(Vuex)



// STATE
const state = {
	pageTitle: "Vue ToDo List"
}



// GETTERS
const getters = {
	getPageTitle(state) {
		return state.pageTitle
	}
}



// MUTACTIONS
const mutations = {}



// ACTIONS
const actions = {}



// MODULES
const modules = {}



// CREATE STORE
const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules
});



export default store;