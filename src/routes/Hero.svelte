<script>
	import { fly } from 'svelte/transition';
</script>

<header class="flex items-center gap-4" in:fly={{ y: -15, delay: 50 * 5 }}>
	<img src="me.jpg" alt="Profile" class="h-14 w-14 rounded-lg grayscale" />
	<div class="flex flex-col">
		<h1 class="rubik text-xl font-medium text-zinc-50">James Montebell</h1>
		<div class="text-zinc-400">Student, Developer and Designer</div>
	</div>
</header>
