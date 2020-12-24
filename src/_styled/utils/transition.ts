import { Transition } from '../../_types/Transition'

export const getCSSForTransition = (transition: Transition) => {
  if (!transition || !transition.length) return 'none'

  // Bail if transition is of type 'unset' | 'initial' | 'inherit'
  if (typeof transition === 'string') return transition

  return transition.reduce(
    (
      acc,
      {
        transitionProperty,
        transitionDuration,
        transitionTimingFunction,
        transitionDelay,
      },
      index,
      arr,
    ) => {
      // Build the CSS value string; if not last index, include comma
      acc += `${transitionProperty} ${transitionDuration}${
        transitionTimingFunction ? ` ${transitionTimingFunction}` : ''
      }${transitionDelay ? ` ${transitionDelay}` : ''}${
        index < arr.length - 1 ? ', ' : ''
      }`
      return acc
    },
    '', // Start with empty string as initial value
  )
}
