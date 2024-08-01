<script setup>
	import { useOptionsStore } from '@/stores/options';
	import { useRoute } from 'vue-router';

	const route = useRoute();
	const options = useOptionsStore();
</script>

<template>
	<div>
		<p class="direction">
			{{ options.current.direction }}
		</p>
		<RouterLink v-for="choice in options.current.choices" :key="choice.slug" :to="`/${choice.slug}`">
			{{ choice.text }}
		</RouterLink>
	</div>
</template>

<style></style>
