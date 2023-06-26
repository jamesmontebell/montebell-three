<script>
	import { fly } from 'svelte/transition';
</script>

<section in:fly={{ y: -15, delay: 50 * 5 }}>
	<div class="text-xl font-medium mb-5 rubik text-zinc-50">About Me</div>
	<h2 class="text-lg font-medium mb-3 text-zinc-50">Short Bio</h2>
	<div class="flex flex-row gap-5">
		<p class="w-full text-zinc-400">
			Hey there! I'm James, a student with a passion for software development and web app
			development. I absolutely love diving into the world of coding and creating awesome software
			and websites. <br />When I'm not busy coding, you can find me hitting the gym, chilling with
			my furry feline friends, or loudly singing my favorite tunes.
		</p>
		<div
			class="h-20 w-20 flex-none overflow-hidden rounded-full hover:ring-2 ring-zinc-800 transition-all"
		>
			<img src="me.jpg" alt="Me" class="grayscale" />
		</div>
	</div>
</section>
