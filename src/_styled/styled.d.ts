import 'styled-components'
import { BoxShadow } from '../_types/BoxShadow'

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
}

export interface BoxModelStyles {
  maxWidth?: string
  width?: string
  minWidth?: string

  maxHeight?: string
  height?: string
  minHeight?: string

  padding?: string
  margin?: string
  border?: string
}

declare module 'styled-components' {
  export interface Theme {
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
    button: TextStyles & BoxModelStyles & ButtonStyles
    ghostButton: TextStyles &
      BoxModelStyles &
      ButtonStyles & {
        borderWidth: string
        borderStyle: string
      }
    textButton: TextStyles & BoxModelStyles & ButtonStyles
    palette: {
      primary: {
        value: string
        contrast: string
      }
      secondary: {
        value: string
        contrast: string
      }
      tertiary: {
        value: string
        contrast: string
      }
      quaternary: {
        value: string
        contrast: string
      }

      disabled: {
        value: string
        contrast: string
      }

      danger: {
        value: string
        contrast: string
      }
      warning: {
        value: string
        contrast: string
      }
      success: {
        value: string
        contrast: string
      }

      background: string
      componentBackground: string

      // TODO: Collapse into background and componentBackground when capability to switch themes
      backgroundDark?: string
      componentBackgroundDark?: string
    }

    borderRadius: string

    boxShadow: {
      default: BoxShadow[]
      defaultInset: BoxShadow[]

      pronounced: BoxShadow[]
      pronouncedInset: BoxShadow[]
    }
  }
}
