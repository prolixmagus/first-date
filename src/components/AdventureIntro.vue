<script setup>
	import { useOptionsStore } from '@/stores/options';
	import { useRoute } from 'vue-router';

	const route = useRoute();
	const options = useOptionsStore();
</script>

<template>
	<section class="exposition">
		<div class="inner-column">
			<div class="exposition-wrapper">
				<h1 class="attention-voice">{{ options.current.heading }}</h1>
				<p v-for="paragraph in options.current.paragraphs">{{ paragraph.text }}</p>
			</div>
		</div>
	</section>
</template>

<style scoped>
	.exposition-wrapper {
		max-width: 900px;
	}
	p {
		text-wrap: wrap;
	}
</style>
