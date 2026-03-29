<script>
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Link } from '$lib/components/ui/link';
	import PageTitle from '$lib/components/ui/title/PageTitle.svelte';
</script>

<svelte:head>
	<title>UI components</title>
</svelte:head>

<section>
	<PageTitle>UI components</PageTitle>
	<div class="grid">
		<Card>
			<h3>Link</h3>
			<Link href="#">This is a link</Link>
		</Card>
		<Card>
			<h3>Button</h3>
			<Button>Click me</Button>
			<Button disabled>Click me</Button>
			<Button href="#">Link button</Button>
			<Button variant="primary">Primary</Button>
		</Card>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--size-4);
	}
</style>
