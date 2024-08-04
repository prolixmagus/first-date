<script setup>
	import { useOptionsStore } from '@/stores/options';
	import { useRoute } from 'vue-router';

	const route = useRoute();
	const options = useOptionsStore();
</script>

<template>
	<section class="exposition">
		<div class="inner-column">
			<h1 class="attention-voice">{{ options.current.heading }}</h1>
			<p>{{ options.current.text }}</p>
		</div>
	</section>
</template>

<style scoped></style>
