<script>
	import Icon from '@iconify/svelte';

	function openOutlook() {
		window.open('mailto:jmontebell2@gulls.salisbury.edu', '_blank');
	}
	function openLinkedin() {
		window.open('https://www.linkedin.com/in/james-montebell-223456233/', '_blank');
	}

	function openGithub() {
		window.open('https://github.com/jamesmontebell', '_blank');
	}
</script>

<footer class="mx-auto w-full max-w-screen-sm px-4 pb-12 pt-16">
	<div class="mx-auto flex flex-col items-center">
		<span class="text-zinc-400 mb-4 mt-2 text-sm">@ 2023 montebell.dev</span>
		<ul class="mt-3.5 flex items-center gap-1.5">
			<li>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a on:click={openGithub} href="">
					<Icon
						class="text-zinc-50 hover:scale-125 transition-all ease-in-out duration-300"
						icon="charm:github"
					/>
				</a>
			</li>
			<li>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a on:click={openLinkedin} href="">
					<Icon
						class="text-zinc-50 text-xl hover:scale-125 transition-all ease-in-out duration-300"
						icon="mdi:linkedin"
					/>
				</a>
			</li>
			<li>
				<a on:click={openOutlook} href="https://jmontebell2@gulls.salisbury.edu">
					<Icon
						class="text-zinc-50 text-xl hover:scale-125 transition-all ease-in-out duration-300"
						icon="mdi:outlook"
					/>
				</a>
			</li>
		</ul>
	</div>
</footer>
