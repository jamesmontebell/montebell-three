<script>
	import { allCommunity } from '$lib/constants';
	import CommunityRole from './CommunityRole.svelte';
	import { fly } from 'svelte/transition';
</script>

<section in:fly={{ y: -15, delay: 50 * 15 }}>
	<h2 class="text-lg font-medium mb-3 text-zinc-50">Community</h2>
	<div class="flex flex-col gap-5 flex-wrap">
		{#each Object.entries(allCommunity) as [company, items]}
			<CommunityRole {company} {items} />
		{/each}
	</div>
</section>
