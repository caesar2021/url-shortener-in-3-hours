<template>
	<div>
		Manage
	</div>
	<div v-if="!isAuthenticated">
		Authentication is required!
	</div>
	<div v-else>
		You are authenticated!
	</div>
</template>


<script setup>
	import { storeToRefs } from 'pinia'
	import { useSessionStore } from '@/stores/session'

	const session = useSessionStore();
	
	const { isAuthenticated } = storeToRefs(session)

	
</script>