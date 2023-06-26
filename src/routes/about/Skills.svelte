<script lang="ts">
	import Skill from './Skill.svelte';
	import { techStack } from '../../lib/constants';
	import { fly } from 'svelte/transition';
</script>

<section in:fly={{ y: -15, delay: 50 * 20 }}>
	<h2 class="text-lg font-medium mb-3 text-zinc-50">Skills</h2>

	<div class="flex flex-row gap-5 flex-wrap">
		{#each Object.entries(techStack) as [title, items]}
			<Skill {title} {items} />
		{/each}
	</div>
</section>
