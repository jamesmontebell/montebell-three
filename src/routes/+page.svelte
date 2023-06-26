<script>
	import Contact from './Contact.svelte';
	import Hero from './Hero.svelte';
	import HomeProjects from './HomeProjects.svelte';
	import { fly, fade } from 'svelte/transition';
</script>

<div class="flex flex-col gap-16">
	<Hero />
	<HomeProjects />
	<Contact />
</div>
