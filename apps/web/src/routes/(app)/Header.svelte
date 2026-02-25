<script>
	import { Button } from '$lib/components/ui/button';
</script>

<header>
	<a href="/" class="brand">
		<h1>Dev tools</h1>
	</a>
	<nav>
		<Button href="/tools">Tools</Button>
	</nav>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		gap: var(--size-4);
		background: linear-gradient(
			to right,
			var(--color-surface-emphasize),
			var(--color-surface-emphasize)
		);
		border-bottom: var(--border-neutral);
		padding: var(--size-4);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.brand {
		text-decoration: none;
		display: flex;
		align-items: center;

		h1 {
			margin: 0;
			font-size: var(--font-size-xlarge);
			font-weight: bold;
			color: var(--color-primary);
		}
	}

	nav {
		display: flex;
		gap: var(--size-4);
		align-items: center;
	}

	.nav-link {
		text-decoration: none;
		color: var(--color-text);
		font-weight: 500;
		padding: var(--size-2) var(--size-3);
		border-radius: 0.375rem;
		transition: all 0.2s ease;

		&:hover {
			background-color: var(--color-surface);
			color: var(--color-primary);
		}
	}
</style>
