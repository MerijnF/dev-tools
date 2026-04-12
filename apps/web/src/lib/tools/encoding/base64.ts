import * as v from 'valibot';

export const encodeOrDecodeBase64DataSchema = v.object({
	input: v.string(),
	action: v.picklist(['encode', 'decode']),
	useUrlSafeEncoding: v.optional(v.boolean(), false),
	encodingOptions: v.optional(
		v.object({
			omitPadding: v.optional(v.boolean(), false)
		}),
		{}
	),
	decodingOptions: v.optional(
		v.object({
			lastChunkHandling: v.pipe(v.picklist(['loose', 'strict', 'stop-before-partial']))
		}),
		{
			lastChunkHandling: 'strict'
		}
	)
});

export type EncodeOrDecodeBase64 = v.InferOutput<typeof encodeOrDecodeBase64DataSchema>;

export function ParseEncodeOrDecodeBase64Data(data: unknown): EncodeOrDecodeBase64 {
	return v.parse(encodeOrDecodeBase64DataSchema, data);
}

export function encodeOrDecodeBase64(data: EncodeOrDecodeBase64): string {
	switch (data.action) {
		case 'encode': {
			const encoder = new TextEncoder();
			const bytes = encoder.encode(data.input);
			return bytes.toBase64({
				alphabet: data.useUrlSafeEncoding ? 'base64url' : 'base64',
				omitPadding: data.encodingOptions.omitPadding
			});
		}
		case 'decode': {
			const bytes = Uint8Array.fromBase64(data.input, {
				alphabet: data.useUrlSafeEncoding ? 'base64url' : 'base64',
				lastChunkHandling: data.decodingOptions.lastChunkHandling
			});
			const decoder = new TextDecoder();
			return decoder.decode(bytes);
		}
	}
}
