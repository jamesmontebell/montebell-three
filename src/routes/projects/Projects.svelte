<script lang="ts">
	import type { ProjectItem } from '../../lib/constants';
	import Icon from '@iconify/svelte';

	export let title: string;
	export let items: ProjectItem[];
</script>

<ul class="flex flex-col gap-2">
	{#each items as { icon, iconHTML, iconStyle, name, style, description, background }}
		<li
			class="h-28 hover:h-52 w-full group relative transition-all duration-300 ease-in-out rounded-lg overflow-hidden mb-2"
		>
			<a href="/{title}">
				<div
					class="w-full h-full object-cover bg-gradient-to-br {background} group-hover:opacity-50 transition-all ease-in-out duration-300 flex justify-center items-center"
				>
					{#if name == 'JamesM'}
						<div class={style}>
							<span class="font-bold bg-transparent"
								>James<span class="font-light bg-transparent">M</span></span
							>
						</div>
					{:else}
						<div class={style}>
							{name}
						</div>
					{/if}
					{#if icon}
						{#if name == 'PokedexJS'}
							<div class={iconStyle}>
								<Icon icon={iconHTML} class="bg-transparent" />
							</div>
						{:else if name == 'ANIME-DB'}
							<div class={iconStyle}>
								<Icon icon={iconHTML} class="bg-transparent" />
							</div>
						{:else if name == 'CZCreative'}
							<div class={iconStyle}>
								<Icon icon={iconHTML} class="bg-transparent" />
							</div>
						{:else if name == 'SvelteKit Pokedex'}
							<div class={iconStyle}>
								<Icon icon={iconHTML} class="bg-transparent" />
							</div>
						{/if}
					{/if}
				</div>
				<div
					class="absolute bottom-0 left-0 translate-y-full p-6 text-zinc-50 transition-transform duration-300 ease-in-out group-hover:translate-y-0 bg-transparent"
				>
					<h1 class="text-lg font-medium mb-1.5 bg-transparent">{title}</h1>
					<p class="text-sm bg-transparent">{description}</p>
				</div>
			</a>
		</li>
	{/each}
</ul>
