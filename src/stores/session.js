import { defineStore } from 'pinia'


import identity from 'netlify-identity-widget'

export const useSessionStore = defineStore("session",{
	state: () => ({
		auth: null
	}),
	getters: {
		isAuthenticated: (state) => state.auth ? true : false
	},
	actions: {

		init(payload) {
			this.loadObservers()
			identity.init({
				container: payload,
				locale: 'en'
			})
		},
		populateAuth() {
			this.auth = identity.currentUser()
		},
		showWidget() {
			identity.open()
		},
		logout() {
			identity.logout();
		},
		SET_AUTH(payload) {
			this.auth = payload;
		},
		loadObservers(){
			identity.on('init', user => {
				this.SET_AUTH(user)
			})
			identity.on('login', user => {
				this.SET_AUTH(user)
			})
			identity.on('logout', () => {
				this.SET_AUTH(null)
			})
		}
	}
})