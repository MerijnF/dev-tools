<script>
	import { resolve } from '$app/paths';
	import { Link, PageTitle, Title } from '$lib/components/ui';
	import { Card } from '$lib/components/ui/card';
</script>

<PageTitle>Tools</PageTitle>
<div class="container">
	<Card>
		<Title>Encoding</Title>
		<ul>
			<li><Link href={resolve('/tools/encoding/base64')}>Base64 encoder/decoder</Link></li>
		</ul>
	</Card>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--size-2);
	}
</style>
