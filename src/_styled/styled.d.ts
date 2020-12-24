import 'styled-components'

// CSS Property Utilities
import { BoxShadow } from '../_types/BoxShadow'
import { Transition } from '../_types/Transition'
import { BoxModelStyles } from '../_types/BoxModelStyles'

// Components
import { DrawerStyles } from '../_types/components/Drawer'

export interface TextStyles {
  fontFamily: string
  fontSize: string
  kerning: string
  fontStyle?: string
  fontWeight: string
  textTransform?: string
}

export interface TypographyStyles extends TextStyles {
  marginBottom?: string
  color: string
}

export interface ButtonStyles extends TextStyles {
  outline: string
  cursor: string
  transition?: Transition
  transform?: string
  boxShadow?: BoxShadow
}

export interface PaletteColors {
  value: string // The actual color value for this palette member
  contrast: string // The contrast color for when text must be readable as the foreground of the above color value
}

export interface Palette {
  primary: PaletteColors
  secondary: PaletteColors
  tertiary: PaletteColors
  quaternary: PaletteColors

  disabled: PaletteColors

  danger: PaletteColors
  warning: PaletteColors
  success: PaletteColors

  background: string
  panelBackground: string
}

export interface BoxShadowConfig {
  default?: BoxShadow
  defaultInset?: BoxShadow

  pronounced?: BoxShadow
  pronouncedInset?: BoxShadow

  /* Because you cannot animate a box-shadow to/from 'none', you can optionally
    provide a box-shadow with 0 x-, y-offsets, and blur- and spread-radii, and
    a transparent color whose non-alpha values constitute an appropriate color--
    appropriate color likely meaning what you're tweening to/from, so that an
    inappropriate color isn't displayed as the animation executes. */
  animatableNone?: BoxShadow
  animatableNoneInset?: BoxShadow
}

export interface DrawerStyles {
  handle: HandleStyles
}

declare module 'styled-components' {
  export interface Globals {
    palette: Palette
    borderRadius: string
    boxShadow: BoxShadowConfig
  }

  export interface Theme {
    // Globals
    palette: Palette
    borderRadius: string
    boxShadow: BoxShadowConfig

    h1: TypographyStyles
    h2: TypographyStyles
    h3: TypographyStyles
    h4: TypographyStyles
    h5: TypographyStyles
    h6: TypographyStyles
    body1: TypographyStyles
    body2: TypographyStyles
    label: TypographyStyles
    textInput: TypographyStyles & {
      placeholderColor: string
      border?: string
    }
    panel: {
      defaults: {
        backgroundColor: string
        foregroundColor: string
        padding: string
        outlineColor: string
      }
    }

    button: TextStyles &
      BoxModelStyles &
      ButtonStyles & {
        hovered: TextStyles &
          BoxModelStyles &
          ButtonStyles &
          ButtonModifierStyles
        clicked: TextStyleds &
          BoxModelStyles &
          ButtonStyles &
          ButtonModifierStyles
        disabled: TextStyles &
          BoxModelStyles &
          ButtonStyles &
          ButtonModifierStyles
      }
    ghostButton: TextStyles &
      BoxModelStyles &
      ButtonStyles & {
        borderWidth: string
        borderStyle: string
      }
    textButton: TextStyles & BoxModelStyles & ButtonStyles
    drawer: DrawerStyles
  }
}
