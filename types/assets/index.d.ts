/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.inline.svg' {
  const svgComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default svgComponent
}

declare module '*.svg' {
  const svgUrl: string
  export default svgUrl
}

declare module '*.png' {
  const pngUrl: string
  export default pngUrl
}
