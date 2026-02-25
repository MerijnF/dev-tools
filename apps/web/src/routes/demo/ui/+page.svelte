<script>
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
</script>

<section style="background-color: var(--color-background);">
	<h2>Button on background</h2>
	<Button>Click me</Button>
	<Button disabled>Click me</Button>
	<Button class="classic">Click me with a class</Button>
	<Button href="#">Link button</Button>
</section>
<section style="background-color: var(--color-surface);">
	<h2>Button on surface</h2>
	<Button>Click me</Button>
	<Button disabled>Click me</Button>
	<Button class="classic">Click me with a class</Button>
	<Button href="#">Link button</Button>
</section>
<section style="background-color: var(--color-surface-emphasize);">
	<h2>Button on surface emphasize</h2>
	<Button>Click me</Button>
	<Button disabled>Click me</Button>
	<Button class="classic">Click me with a class</Button>
	<Button href="#">Link button</Button>
</section>
<section>
	<h2>Textarea</h2>
	<Textarea />
	<Textarea placeholder="Enter text here..." />
	<Textarea disabled placeholder="Enter text here..." />
</section>

<style>
	section {
		padding: var(--size-4);
	}

	:global .classic {
		background-color: red !important;
		color: white;
	}
</style>
