<div class="grid">
	<div class="surface">
		<h4>surface</h4>
		<p>on surface</p>
		<p class="on-surface-variant">on surface-variant</p>
	</div>

	<div class="surface-container-lowest">
		<h4>surface-container-lowest</h4>
		<p>on surface</p>
		<p class="on-surface-variant">on surface-variant</p>
	</div>
	<div class="surface-container-low">
		<h4>surface-container-low</h4>
		<p>on surface</p>
		<p class="on-surface-variant">on surface-variant</p>
	</div>
	<div class="surface-container">
		<h4>surface-container</h4>
		<p>on surface</p>
		<p class="on-surface-variant">on surface-variant</p>
	</div>
	<div class="surface-container-high">
		<h4>surface-container-high</h4>
		<p>on surface</p>
		<p class="on-surface-variant">on surface-variant</p>
	</div>
	<div class="surface-container-highest">
		<h4>surface-container-highest</h4>
		<p>on surface</p>
		<p class="on-surface-variant">on surface-variant</p>
	</div>
</div>

<style>
	.on-surface-variant {
		color: var(--color-on-surface-variant);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	.surface {
		grid-column: span 5;
		background-color: var(--color-surface);
		color: var(--color-on-surface);
	}

	.surface-container-lowest {
		background-color: var(--color-surface-container-lowest);
		color: var(--color-on-surface);
	}

	.surface-container-low {
		background-color: var(--color-surface-container-low);
		color: var(--color-on-surface);
	}

	.surface-container {
		background-color: var(--color-surface-container);
		color: var(--color-on-surface);
	}

	.surface-container-high {
		background-color: var(--color-surface-container-high);
		color: var(--color-on-surface);
	}

	.surface-container-highest {
		background-color: var(--color-surface-container-highest);
		color: var(--color-on-surface);
	}
</style>
