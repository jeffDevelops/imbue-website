export interface IndividualTransition {
  transitionProperty: string
  transitionDuration: string
  transitionTimingFunction?: string
  transitionDelay?: string
}

export type Transition =
  | IndividualTransition[]
  | 'inherit'
  | 'initial'
  | 'unset'
