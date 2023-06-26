<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav
	class="sticky top-0 mx-auto mb-2 z-50 flex w-full max-w-screen-sm items-center justify-between px-4 py-4"
>
	<div class="flex items-center">
		<a class="flex items-center" href="/">
			<div class="text-zinc-50 code text-lg">
				<span class="font-bold">James<span class="font-light">M</span></span>
			</div>
		</a>
	</div>

	<ul class="ml-auto hidden items-center gap-1.5 md:flex">
		<li />
		{#if $page.url.pathname == '/'}
			<a
				class="rubik relative flex rounded px-2 py-1 text-sm font-medium transition-all bg-zinc-900 md:inline-flex text-zinc-50"
				href="/">Home</a
			>
		{:else}
			<a
				class="rubik relative flex rounded px-2 py-1 text-sm font-medium transition-all hover:bg-zinc-900 md:inline-flex text-zinc-300"
				href="/">Home</a
			>
		{/if}
		<li>
			{#if $page.url.pathname == '/about'}
				<a
					class="rubik relative flex rounded px-2 py-1 text-sm font-medium transition-all bg-zinc-900 md:inline-flex text-zinc-50"
					href="/about">About</a
				>
			{:else}
				<a
					class="rubik relative flex rounded px-2 py-1 text-sm font-medium transition-all hover:bg-zinc-900 md:inline-flex text-zinc-300"
					href="/about">About</a
				>
			{/if}
		</li>
		<li>
			{#if $page.url.pathname == '/projects'}
				<a
					class="rubik relative flex rounded px-2 py-1 text-sm font-medium transition-all bg-zinc-900 md:inline-flex text-zinc-50"
					href="/projects">Projects</a
				>
			{:else}
				<a
					class="rubik relative flex rounded px-2 py-1 text-sm font-medium transition-all hover:bg-zinc-900 md:inline-flex text-zinc-300"
					href="/projects">Projects</a
				>
			{/if}
		</li>
		<li>
			{#if $page.url.pathname == '/Contact'}
				<a
					class="rubik relative flex rounded px-2 py-1 text-sm font-medium transition-all bg-zinc-900 md:inline-flex text-zinc-50"
					href="/Contact">Contact</a
				>
			{:else}
				<a
					class="rubik relative flex rounded px-2 py-1 text-sm font-medium transition-all hover:bg-zinc-900 md:inline-flex text-zinc-300"
					href="/Contact">Contact</a
				>
			{/if}
		</li>
	</ul>
</nav>
