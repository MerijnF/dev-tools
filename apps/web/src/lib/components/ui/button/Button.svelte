<script lang="ts">
	import clsx from 'clsx';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type ButtonProps = ((HTMLAnchorAttributes & { href: string }) | HTMLButtonAttributes) & {
		variant?: 'neutral' | 'primary';
		kind?: 'default' | 'icon';
		rounded?: boolean;
	};

	let {
		children,
		class: propsClass,
		variant = 'neutral',
		kind = 'default',
		rounded = false,
		...restProps
	}: ButtonProps = $props();
</script>

{#if 'href' in restProps}
	<a class={clsx(propsClass, 'button', variant, kind, { rounded })} {...restProps}
		>{@render children?.()}</a
	>
{:else}
	<button class={clsx(propsClass, 'button', variant, kind, { rounded })} {...restProps}
		>{@render children?.()}</button
	>
{/if}

<style>
	a {
		text-decoration: none;
		color: inherit;
	}

	.button {
		--button-background-color: var(--color-surface-container-low);
		--button-color: var(--color-on-surface);
		--button-border-radius: var(--size-2);
		--button-padding-horizontal: var(--size-3);
		--button-padding-vertical: var(--size-2);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		padding: var(--button-padding-vertical) var(--button-padding-horizontal);
		border: var(--border-neutral);
		border-radius: var(--button-border-radius);
		box-shadow: var(--shadow-elevated);
		transition: box-shadow 0.2s ease-out;
		font-weight: bold;
		background-color: var(--button-background-color);
		color: var(--button-color);

		&.rounded {
			--button-border-radius: var(--size-999);
		}

		&.icon {
			--button-padding-horizontal: var(--size-2);
		}

		&.primary {
			--button-background-color: var(--color-primary-container);
			--button-color: var(--color-on-primary-container);
		}

		&:hover:not(:disabled) {
			cursor: pointer;
			background-color: color-mix(
				in srgb,
				var(--button-background-color),
				var(--button-color) var(--mix-hover)
			);
		}

		&:active:not(:disabled) {
			box-shadow: none;
			background-color: color-mix(
				in srgb,
				var(--button-background-color),
				var(--button-color) var(--mix-focus)
			);
		}

		&:focus:not(:disabled) {
			background-color: color-mix(
				in srgb,
				var(--button-background-color),
				var(--button-color) var(--mix-focus)
			);
		}

		&:focus-visible:not(:disabled) {
			background-color: color-mix(
				in srgb,
				var(--button-background-color),
				var(--button-color) var(--mix-focus)
			);
			outline: var(--outline-focus);
		}

		&:disabled {
			opacity: 80%;
			cursor: not-allowed;
			box-shadow: none;
		}
	}
</style>
