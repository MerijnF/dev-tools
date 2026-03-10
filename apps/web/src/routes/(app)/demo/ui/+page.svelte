<script>
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Textarea } from '$lib/components/ui/textarea';
	import PageTitle from '$lib/components/ui/title/PageTitle.svelte';
</script>

<section>
	<PageTitle>UI components</PageTitle>
	<div class="grid">
		<Card variant="ghost">
			<h3>Button on background</h3>
			<Button>Click me</Button>
			<Button disabled>Click me</Button>
			<Button href="#">Link button</Button>
			<Button variant="primary">Primary</Button>
		</Card>
		<Card>
			<h3>Button on surface emphasize</h3>
			<Button>Click me</Button>
			<Button disabled>Click me</Button>
			<Button href="#">Link button</Button>
			<Button variant="primary">Primary</Button>
		</Card>
		<Card variant="emphasized">
			<h3>Button on surface emphasize</h3>
			<Button>Click me</Button>
			<Button disabled>Click me</Button>
			<Button href="#">Link button</Button>
			<Button variant="primary">Primary</Button>
		</Card>
	</div>
</section>

<section>
	<h2>Form Inputs</h2>
	<div class="grid">
		<Card variant="ghost">
			<h3>Form on background</h3>
			<h4>textarea</h4>
			<Textarea />
			<Textarea placeholder="Enter text here..." />
			<Textarea disabled placeholder="Enter text here..." />
		</Card>
		<Card>
			<h3>Form on surface</h3>
			<h4>textarea</h4>
			<Textarea />
			<Textarea placeholder="Enter text here..." />
			<Textarea disabled placeholder="Enter text here..." />
		</Card>
		<Card variant="emphasized">
			<h3>Form on surface emphasize</h3>
			<h4>textarea</h4>
			<Textarea />
			<Textarea placeholder="Enter text here..." />
			<Textarea disabled placeholder="Enter text here..." />
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
