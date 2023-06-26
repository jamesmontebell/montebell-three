<script lang="ts">
	import { allExperiences } from '../../lib/constants';
	import Experience from './Experience.svelte';
	import { fly } from 'svelte/transition';
</script>

<section in:fly={{ y: -15, delay: 50 * 10 }}>
	<h2 class="text-lg font-medium mb-3 text-zinc-50">Experience</h2>
	<div class="flex flex-col gap-5 flex-wrap">
		{#each Object.entries(allExperiences) as [company, items]}
			<Experience {company} {items} />
		{/each}
	</div>
</section>
