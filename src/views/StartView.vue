<script setup>
	import { useRouter } from 'vue-router';
	import { useOptionsStore } from '@/stores/options';

	const router = useRouter();
	const options = useOptionsStore();
	router.push('/start');
</script>

<template></template>

<style></style>
