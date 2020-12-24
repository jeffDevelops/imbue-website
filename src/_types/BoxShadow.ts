interface IndividualBoxShadow {
  xOffset: string
  yOffset: string
  blurRadius?: string
  spreadRadius?: string
  color: string
  inset?: boolean
}

export type BoxShadow =
  | IndividualBoxShadow[]
  | 'none'
  | 'inherit'
  | 'initial'
  | 'unset'
