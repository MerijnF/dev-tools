import { form } from "$app/server";
import * as v from "valibot";

export const encodeOrDecodeBase64 = form(v.object({
    input: v.string(),
    action: v.picklist(["encode", "decode"])
}), async (data) => {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(data.input);
    const base64 = bytes.toBase64();
    return { output: base64 };
});