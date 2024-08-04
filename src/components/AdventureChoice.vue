<script setup>
	import { useOptionsStore } from '@/stores/options';
	import { useRoute, useRouter } from 'vue-router';
	import { onMounted, onBeforeUnmount } from 'vue';
	const route = useRoute();
	const options = useOptionsStore();
	const router = useRouter();

	function assignKey(event) {
		//find what key you want to press
		// convert the result to a string
		// subtract 1 from key to get correct index (from 0)
		// convert key to int
		// select the right option from the choices array
		// redirect to the right page

		const key = event.key;
		if (key >= '1' && key <= String(options.current.choices.length)) {
			const index = parseInt(key) - 1;
			const choice = options.current.choices[index];
			if (choice) {
				router.push(`/adventure/${choice.slug}`);
			}
		}
	}

	onMounted(() => document.addEventListener('keydown', assignKey));
	onBeforeUnmount(() => document.removeEventListener('keydown', assignKey));
</script>

<template>
	<section class="decisions">
		<div class='inner-column'>
			<h2 class="situation">
				{{ options.current.decision }}
			</h2>
			<ol class="choices">
				<li v-for="choice in options.current.choices" :key="choice.id">
					<RouterLink :to="`/adventure/${choice.slug}`">
						{{ choice.text }}
					</RouterLink>
				</li>
			</ol>
		</div class='inner-column'>
	</section>
</template>

<style></style>
