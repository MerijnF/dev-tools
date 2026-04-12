import { form } from '$app/server';
import { encodeOrDecodeBase64, encodeOrDecodeBase64DataSchema } from '$lib/tools/encoding/base64';

export const encodeOrDecodeBase64Action = form(encodeOrDecodeBase64DataSchema, async (data) => {
	return { output: encodeOrDecodeBase64(data) };
});
