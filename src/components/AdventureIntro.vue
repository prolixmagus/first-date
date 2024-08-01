<script setup>
	import { useOptionsStore } from '@/stores/options';
	import { useRoute } from 'vue-router';

	const route = useRoute();
	const options = useOptionsStore();
</script>

<template>
	<section>
		<h1>{{ options.current.heading }}</h1>
		<h2>{{ route.params.slug }}</h2>
		<p>{{ options.current.text }}</p>
	</section>
</template>

<style scoped></style>
