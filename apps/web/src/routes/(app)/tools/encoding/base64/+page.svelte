<script lang="ts">
	import { Button } from '$lib/components/ui';
	import { Textarea } from '$lib/components/ui/textarea';
	import { encodeOrDecodeBase64 } from './base64.remote';
</script>

<section>
	<h2>Base64 encode / decode</h2>
</section>
<form
	{...encodeOrDecodeBase64.enhance(async ({ submit }) => {
		if (await submit()) {
			// handle success
		} else {
			// handle error
		}
	})}
>
	<Textarea {...encodeOrDecodeBase64.fields.input.as('text')} placeholder="Enter text to encode" />
	<Button {...encodeOrDecodeBase64.fields.action.as('submit', 'encode')}>Encode</Button>
	<Button {...encodeOrDecodeBase64.fields.action.as('submit', 'decode')}>Decode</Button>
</form>

{#if encodeOrDecodeBase64.result}
	<section>
		<h3>Result</h3>
		<p>{encodeOrDecodeBase64.result.output}</p>
	</section>
{/if}

<style>
</style>
