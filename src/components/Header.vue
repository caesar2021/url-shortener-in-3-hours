<template>
	<header>
		<nav class="navbar navbar-expand-lg bg-light">
			<div class="container-fluid">
				<router-link class="navbar-brand" :to="{ name: 'home' }">Home</router-link>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      				<span class="navbar-toggler-icon"></span>
    			</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<router-link class="nav-link" :to="{ name: 'manage' }">Manage</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
						</li>
						<template v-if="!isAuthenticated">
							<li class="nav-item">
								<button type="button" class="btn btn-primary" @click="btnLoginClick">Login</button>
							</li>
						</template>
						<template v-else>
							<li class="nav-item">
								<button type="button" class="btn btn-outline-danger" @click="btnLogoutClick">Logout</button>
							</li>
						</template>
					</ul>
				</div>
			</div>
		</nav>
		<div id="identityModal"></div>
	</header>
</template>

<script setup>
	import { onMounted, ref } from 'vue'
	import { storeToRefs } from 'pinia'
	import { useSessionStore } from '@/stores/session'

	const session = useSessionStore()

	const { isAuthenticated } = storeToRefs(session)

	onMounted(()=>{
		
		session.init("#identityModal")

	})

	const btnLoginClick = () => {
		session.showWidget()
	}

	const btnLogoutClick = () => {

		session.logout()

	}

</script>
