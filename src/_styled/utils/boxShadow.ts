import { BoxShadow } from '../../_types/BoxShadow'

export const getCSSForBoxShadow = (shadow?: BoxShadow) => {
  if (!shadow || shadow.length === 0) return 'none'

  // Bail if value is 'none' | 'initial' | 'unset' | 'inherit'
  if (typeof shadow === 'string') return shadow

  return shadow.reduce(
    (
      acc,
      { xOffset, yOffset, blurRadius, spreadRadius, color, inset },
      index,
      arr,
    ) => {
      // Build the CSS value string; if not last index, include comma
      acc += `${inset ? 'inset' : ''} ${xOffset} ${yOffset} ${
        blurRadius ? blurRadius : '0'
      } ${spreadRadius ? spreadRadius : '0'} ${color}${
        index === arr.length - 1 ? '' : ','
      }`
      return acc
    },
    '', // Start with empty string as initial value
  )
}
