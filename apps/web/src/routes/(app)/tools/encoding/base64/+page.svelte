<script lang="ts">
	import { Button } from '$lib/components/ui';
	import { Textarea } from '$lib/components/ui/textarea';
	import {
		encodeOrDecodeBase64,
		encodeOrDecodeBase64DataSchema,
		ParseEncodeOrDecodeBase64Data
	} from '$lib/tools/encoding/base64';
	import { encodeOrDecodeBase64Action } from './base64.remote';

	let clientOutput: string | null = $state(null);
	let output = $derived(clientOutput ?? encodeOrDecodeBase64Action.result?.output);
</script>

<h1 class="page-title">Base64</h1>
<h6 class="sub-title">Encode / Decode</h6>
<form
	{...encodeOrDecodeBase64Action.preflight(encodeOrDecodeBase64DataSchema).enhance(({ data }) => {
		clientOutput = encodeOrDecodeBase64(ParseEncodeOrDecodeBase64Data(data));
	})}
>
	<Textarea
		{...encodeOrDecodeBase64Action.fields.input.as('text')}
		placeholder="Enter text to encode"
	/>
	<input {...encodeOrDecodeBase64Action.fields.encodingOptions.omitPadding.as('checkbox')} />
	<Button {...encodeOrDecodeBase64Action.fields.action.as('submit', 'encode')}>Encode</Button>
	<Button {...encodeOrDecodeBase64Action.fields.action.as('submit', 'decode')}>Decode</Button>
</form>

<section>
	<h3>Result</h3>
	<p>{output}</p>
</section>

<section>
	<h3>Issues</h3>
	<ul>
		{#each encodeOrDecodeBase64Action.fields.allIssues() as issue (issue)}
			<li>{issue.message}</li>
		{/each}
	</ul>
</section>
