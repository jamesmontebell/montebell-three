<script>
	import { allHomeProjects } from '$lib/constants';
	import HomeProject from './HomeProject.svelte';
	import { fly } from 'svelte/transition';
</script>

<section class="flex flex-col gap-4" in:fly={{ y: -15, delay: 50 * 10 }}>
	<div class="mb-6 flex flex-col">
		<h2 class="mb-2.5 text-lg font-medium text-zinc-50 rubik">My latest projects</h2>
		<p class="text-zinc-400 rubik">
			A collection of some side projects that have shipped recently.
		</p>
	</div>
	<ul class="flex flex-col gap-2">
		{#each Object.entries(allHomeProjects) as [title, items]}
			<li>
				<HomeProject {title} {items} />
			</li>
		{/each}
	</ul>
	<a class="text-sm text-zinc-400 hover:underline rubik" href="/projects">...and much more!</a>
</section>
