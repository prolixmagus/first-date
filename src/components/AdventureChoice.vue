<script setup>
	import { useOptionsStore } from '@/stores/options';
	import { useRoute } from 'vue-router';

	const route = useRoute();
	const options = useOptionsStore();
</script>

<template>
	<div>
		<p class="direction">
			{{ options.current.decision }}
		</p>
		<RouterLink v-for="choice in options.current.choices" :key="choice.slug" :to="`/adventure/${choice.slug}`">
			{{ choice.text }}
		</RouterLink>
	</div>
</template>

<style></style>
