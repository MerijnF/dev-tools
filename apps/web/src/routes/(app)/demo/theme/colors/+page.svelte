{#each ['light', 'dark'] as theme (theme)}
	<div class="grid {theme}">
		<div class="primary">
			<h4>primary</h4>
			<p>on primary</p>
		</div>
		<div class="primary-container">
			<h4>primary-container</h4>
			<p>on primary-container</p>
		</div>
		<div class="surface">
			<h4>surface</h4>
			<p>on surface</p>
			<p class="on-surface-variant">on surface-variant</p>
			<p class="on-surface-primary">primary</p>
		</div>
		<div class="inverse-surface">
			<h4>inverse surface</h4>
			<p>on inverse surface</p>
			<p class="on-inverse-surface-primary">inverse primary</p>
		</div>
		<div class="surface-container-lowest">
			<h4>surface-container-lowest</h4>
			<p>on surface</p>
			<p class="on-surface-variant">on surface-variant</p>
			<p class="on-surface-primary">primary</p>
		</div>
		<div class="surface-container-low">
			<h4>surface-container-low</h4>
			<p>on surface</p>
			<p class="on-surface-variant">on surface-variant</p>
			<p class="on-surface-primary">primary</p>
		</div>
		<div class="surface-container">
			<h4>surface-container</h4>
			<p>on surface</p>
			<p class="on-surface-variant">on surface-variant</p>
			<p class="on-surface-primary">primary</p>
		</div>
		<div class="surface-container-high">
			<h4>surface-container-high</h4>
			<p>on surface</p>
			<p class="on-surface-variant">on surface-variant</p>
			<p class="on-surface-primary">primary</p>
		</div>
		<div class="surface-container-highest">
			<h4>surface-container-highest</h4>
			<p>on surface</p>
			<p class="on-surface-variant">on surface-variant</p>
			<p class="on-surface-primary">primary</p>
		</div>
		<div class="outline">
			<h4>outline</h4>
		</div>
		<div class="outline-variant">
			<h4>outline-variant</h4>
		</div>
		<div class="shadow">
			<h4>shadow</h4>
		</div>
	</div>
{/each}

<style>
	.light {
		color-scheme: light;
	}
	.dark {
		color-scheme: dark;
	}

	.on-surface-variant {
		color: var(--color-on-surface-variant);
	}

	.on-surface-primary {
		color: var(--color-primary);
	}

	.on-inverse-surface-primary {
		color: var(--color-inverse-primary);
	}

	.grid {
		margin: var(--size-4) 0;
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		div {
			padding: var(--size-4);
			p {
				margin: var(--size-2) 0;
			}
		}
	}

	.primary {
		grid-column: span 10;
		background-color: var(--color-primary);
		color: var(--color-on-primary);
	}

	.primary-container {
		grid-column: span 10;
		background-color: var(--color-primary-container);
		color: var(--color-on-primary-container);
	}

	.outline {
		grid-column: span 4;
		background-color: var(--color-outline);
		color: var(--color-white);
	}

	.shadow {
		grid-column: span 2;
		background-color: var(--color-shadow);
		color: var(--color-white);
	}

	.outline-variant {
		grid-column: span 4;
		background-color: var(--color-outline-variant);
		color: light-dark(var(--color-black), var(--color-white));
	}

	.surface {
		grid-column: span 7;
		background-color: var(--color-surface);
		color: var(--color-on-surface);
	}

	.inverse-surface {
		grid-column: span 3;
		background-color: var(--color-inverse-surface);
		color: var(--color-inverse-on-surface);
	}

	.surface-container-lowest {
		grid-column: span 2;
		background-color: var(--color-surface-container-lowest);
		color: var(--color-on-surface);
	}

	.surface-container-low {
		grid-column: span 2;
		background-color: var(--color-surface-container-low);
		color: var(--color-on-surface);
	}

	.surface-container {
		grid-column: span 2;
		background-color: var(--color-surface-container);
		color: var(--color-on-surface);
	}

	.surface-container-high {
		grid-column: span 2;
		background-color: var(--color-surface-container-high);
		color: var(--color-on-surface);
	}

	.surface-container-highest {
		grid-column: span 2;
		background-color: var(--color-surface-container-highest);
		color: var(--color-on-surface);
	}
</style>
