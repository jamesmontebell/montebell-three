<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { CommunityItem } from '../../lib/constants';

	export let company: string;
	export let items: CommunityItem[];
</script>

{#each items as { icon, role, date, location, description, url, color }}
	<div
		class="flex flex-col rounded-lg transition-all hover:ring-2 ring-zinc-800 bg-zinc-900 p-3 gap-2"
	>
		<div class="flex flex-row gap-3 items-center bg-zinc-900 rounded-md">
			{#if icon}
				<div class="rounded-lg h-8 w-8 p-2 {color} justify-center flex">
					<img src={icon} alt="" class="bg-transparent" />
					<!-- <Icon icon="logos:{icon}" class="bg-transparent" /> -->
				</div>
			{/if}
			<a href={url} target="_blank">
				<h3 class="text-base font-medium text-zinc-300 bg-zinc-900 hover:underline">
					{company}
				</h3>
			</a>
		</div>
		<div class="text-base font-medium text-zinc-300 bg-zinc-900 rounded-md">{role}</div>
		<div class="text-sm text-zinc-400 bg-zinc-900 rounded-md">
			{date}
		</div>
		<div class="text-sm text-zinc-400 bg-zinc-900 rounded-md">
			{location}
		</div>

		{#each description as desc}
			<div class="text-sm text-zinc-300 bg-zinc-900 rounded-md">{desc}</div>
		{/each}
	</div>
{/each}
