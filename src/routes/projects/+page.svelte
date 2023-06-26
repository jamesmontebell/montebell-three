<script>
	import Projects from './Projects.svelte';
	import { allProjects } from '$lib/constants';
	import { fly } from 'svelte/transition';
</script>

<section in:fly={{ y: -15, delay: 50 * 5 }}>
	<h1 class="text-xl font-medium mb-5 rubik text-zinc-50">My Projects</h1>
	<div class="w-full text-zinc-400 mb-6">
		This is a small selection of the projects I've made. These in particular I found interesting and
		learned a lot from!
	</div>
</section>

{#each Object.entries(allProjects) as [title, items], i}
	<section in:fly={{ y: -15, delay: 100 * i + 5 }}>
		<Projects {title} {items} />
	</section>
{/each}
