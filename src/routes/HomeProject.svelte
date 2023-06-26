<script lang="ts">
	import type { HomeProjectItem } from '$lib/constants';
	import Icon from '@iconify/svelte';

	export let title: string;
	export let items: HomeProjectItem[];
</script>

{#each items as { icon, background, description, url, style }}
	<a
		class="group flex items-center gap-3 rounded-md p-3 transition-all hover:ring-2 ring-zinc-800 bg-zinc-900"
		href={url}
	>
		<div class="h-8 w-8 p-3 rounded-lg {background} flex justify-center items-center">
			<div class="{style} p-2">{icon}</div>
		</div>
		<div class="group flex gap-3 max-w-fit items-center overflow-hidden bg-zinc-900">
			<h3 class="text-zinc-50 text-base font-medium bg-zinc-900 rubik">{title}</h3>
			<span
				class="rubik truncate text-sm text-zinc-400 opacity-0 group-hover:opacity-100 bg-zinc-900 transition-all transform group-hover:ease-in-out group-hover:duration-500"
				>{description}</span
			>
		</div>
		<svg
			class="ml-auto h-4 w-4 flex-none text-zinc-500 group-hover:text-zinc-50 transition-all"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
			/>
		</svg>
	</a>
{/each}
