<script>
	import { Button, Link, PageTitle, Title } from '$lib/components/ui';
	import { Card } from '$lib/components/ui/card';
	import { Textarea } from '$lib/components/ui/textarea';
	import Home from '~icons/material-symbols/home-outline-rounded';
</script>

<svelte:head>
	<title>UI components</title>
</svelte:head>

<section>
	<PageTitle>UI components</PageTitle>
	<div class="grid">
		<Card>
			<Title>Link</Title>
			<Link href="#">This is a link</Link>
		</Card>
		<Card>
			<Title>Button</Title>
			<div class="button-row">
				<Button>Click me</Button>
				<Button rounded>Click me</Button>
				<Button disabled>Click me</Button>
				<Button href="#">Link button</Button>
				<Button variant="primary">Primary</Button>
				text
			</div>
			<div class="button-row">
				<Button variant="primary"><Home /> Home</Button>
				<Button kind="icon"><Home /></Button>
				text
			</div>
			<div class="button-row">
				<Button variant="primary" rounded><Home /> Home</Button>
				<Button kind="icon" rounded><Home /></Button>
				text
			</div>
		</Card>
		<Card>
			<Title>Forms</Title>
			<Textarea placeholder="Type something..." />
			<Textarea placeholder="disabled" disabled />
			<Textarea placeholder="3 lines" lines={3} resize={false} />
		</Card>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--size-4);
	}

	.button-row {
		display: flex;
		align-items: center;
		gap: var(--size-2);
		flex-wrap: wrap;
		margin-bottom: var(--size-2);
	}
</style>
