<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { StackItem } from '../../lib/constants';

	export let title: string;
	export let items: StackItem[];
</script>

<h2 class="text-base font-medium mb-3 text-zinc-50">{title}</h2>
<div class="flex flex-row gap-2 flex-wrap">
	{#each items as { url, icon, name, color }}
		<a href={url} class="cursor-pointer" target="”_blank”">
			<div
				class="flex p-3 gap-3 items-center rounded-lg transition-all hover:ring-2 ring-zinc-800 bg-zinc-900"
			>
				{#if icon}
					<div class="rounded-lg h-8 w-8 p-2 {color} justify-center flex">
						{#if icon == 'scikit-learn'}
							<Icon icon="devicon:scikitlearn" class="bg-transparent" />
						{/if}
						{#if icon == 'simple-icons:sony'}
							<Icon icon="simple-icons:sony" class="bg-transparent" />
						{/if}
						{#if icon == 'xml'}
							<Icon icon="bi:filetype-xml" class="bg-transparent" />
						{/if}
						{#if icon == 'wireshark'}
							<Icon icon="simple-icons:wireshark" class="bg-transparent" />
						{/if}
						<Icon icon="logos:{icon}" class="bg-transparent" />
					</div>
				{/if}
				<h3 class="text-sm text-zinc-300 bg-zinc-900">{name}</h3>
			</div>
		</a>
	{/each}
</div>
