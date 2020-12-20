import { BoxShadow } from '../../_types/BoxShadow'

export const getCSSForBoxShadow = (shadows: BoxShadow[]) => {
  if (shadows.length === 0) return 'none'
  return shadows.reduce(
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
