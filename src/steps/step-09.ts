declare module "text-utils" {
  export function toUpperCase(text: string): string;
  export function toLowerCase(text: string): string;
  export type DecoderEncoding = "base64" | "hex" | "utf-8";
  export class BufferDecoder {
    constructor(buf: Uint8Array);
    toString(encoding: BufferDecoder): string;
  }
}
