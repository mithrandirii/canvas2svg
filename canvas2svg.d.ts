declare module "@bokeh/canvas2svg" {
  export type SVGRenderingContext2D = CanvasRenderingContext2D & {
    getSvg(): SVGSVGElement
    getSerializedSvg(fix_named_entities: boolean): string
  }

  export type SVGRenderingOptions = {
     ctx?: CanvasRenderingContext2D
     width?: number
     height?: number
     enableMirroring?: boolean
     document?: Document
  }

  const ctx: {new (options?: SVGRenderingOptions): SVGRenderingContext2D}
  export default ctx
}
