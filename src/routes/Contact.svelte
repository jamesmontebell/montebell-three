<script>
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	function openOutlook() {
		window.open('mailto:jmontebell2@gulls.salisbury.edu', '_blank');
	}
</script>

<section in:fly={{ y: -15, delay: 50 * 15 }}>
	<h3 class="rubik mb-2.5 text-zinc-50 text-lg font-medium">Did I catch your attention?</h3>
	<p class="mb-5 text-zinc-400 rubik">
		Do you have a question, problem or idea that I can help you with? Do not hesitate to contact me.
	</p>
	<div class="flex items-center gap-6">
		<a class="rubik font-base px-5 py-1.5 text-sm bg-white text-black rounded-md" href="/contact"
			>Get in Touch</a
		>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a on:click={openOutlook} class="rubik text-zinc-400 hover:underline hidden md:flex" href=""
			>jmontebell2@gulls.salisbury.edu</a
		>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a on:click={openOutlook} class="md:hidden" href="">
			<Icon
				class="text-white text-xl hover:scale-125 transition-all ease-in-out duration-300"
				icon="mdi:outlook"
			/>
		</a>
	</div>
</section>
