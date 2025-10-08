declare module "dom-to-image-more" {
  interface DomToImageOptions {
    width?: number;
    height?: number;
    style?: Record<string, string | number>;
    quality?: number;
    bgcolor?: string;
    cacheBust?: boolean;
    filter?: (node: HTMLElement) => boolean;
  }

  interface DomToImage {
    toPng(node: HTMLElement, options?: DomToImageOptions): Promise<string>;
    toJpeg(node: HTMLElement, options?: DomToImageOptions): Promise<string>;
    toSvg(node: HTMLElement, options?: DomToImageOptions): Promise<string>;
    toBlob(node: HTMLElement, options?: DomToImageOptions): Promise<Blob>;
  }

  const domtoimage: DomToImage;
  export default domtoimage;
}
