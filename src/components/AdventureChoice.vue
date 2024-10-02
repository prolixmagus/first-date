<script setup>
	import { useOptionsStore } from '@/stores/options';
	import { useRoute, useRouter } from 'vue-router';
	import { useMagicKeys } from '@vueuse/core';
	import { watch, ref } from 'vue';

	const route = useRoute();
	const options = useOptionsStore();
	const router = useRouter();

	const magicKeys = useMagicKeys();
	const keyToIndexMap = {
		Digit1: 0,
		Digit2: 1,
		Digit3: 2,
		Digit4: 3
	};

	const navigateOnKeyPress = (index) => {
		if (index < options.current.choices.length) {
			const choice = options.current.choices[index];
			if (choice) {
				router.push(`/adventure/${choice.slug}`);
			}
		}
	};

	//creates an array of keys from keyToIndexMap object

	Object.keys(keyToIndexMap).forEach((key) => {
		watch(magicKeys[key], (v) => {
			if (v) {
				navigateOnKeyPress(keyToIndexMap[key]);
			}
		});
	});
</script>

<template>
	<section class="decisions">
		<div class="inner-column">
			<div class="choices-wrapper">
				<h2 class="situation calm-voice">
					<strong>{{ options.current.decision }}</strong>
				</h2>
				<ol class="choices">
					<li v-for="choice in options.current.choices" :key="choice.id">
						<RouterLink :to="`/adventure/${choice.slug}`">
							{{ choice.text }}
						</RouterLink>
					</li>

					<!-- to add a future link in options.js store choices, since can't use an internal slug. But can't I just import a component?? -->

					<li v-for="link in options.current.link" :key="link.id" :class="{ 'visually-hidden': options.isHidden }">
						<a :href="link.href">{{ link.text }}</a>
					</li>
				</ol>
			</div>
		</div>
	</section>
</template>
<style scoped>
	.decisions {
		margin-top: 6em;
	}

	.choices-wrapper {
		max-width: 900px;
	}
	.choices {
		border-top: 1px solid var(--black);
		li {
			margin-top: 10px;
		}
	}

	@media (prefers-color-scheme: dark) {
		.choices {
			border-top: 1px solid var(--white);
		}
	}
</style>
