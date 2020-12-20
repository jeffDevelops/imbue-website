import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react'
import styled, { css, Theme } from 'styled-components'
import { StrictUnion } from '../../_types/utils/StrictUnion'

export type HierarchicalColor = {
  hierarchy: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}

export type SemanticColor = {
  meaning: 'success' | 'warning' | 'danger'
}

export type ButtonColor = StrictUnion<HierarchicalColor | SemanticColor>

export type ButtonComponentProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
  width?: string
}

export type ButtonProps = ButtonComponentProps & ButtonColor & StyledButtonProps

export type StyledButtonProps = ButtonColor & {
  width?: string
  disabled?: boolean
}

export const styles = (p: StyledButtonProps & { theme: Theme }) => css`
  /* Set by consuming applications */
  width: ${p.width ? p.width : p.theme.ghostButton.width};

  /* Set by the theme exclusively */
  cursor: pointer;
  border-radius: ${p.theme.borderRadius};
  height: ${p.theme.ghostButton.height};
  text-transform: ${p.theme.ghostButton.textTransform};
  letter-spacing: ${p.theme.ghostButton.kerning};
  font-weight: ${p.theme.ghostButton.fontWeight};
  font-family: ${p.theme.ghostButton.fontFamily};
  padding: ${p.theme.ghostButton.padding};
  outline: ${p.theme.ghostButton.outline};
  background-color: transparent;
  border-width: ${p => p.theme.ghostButton.borderWidth};
  border-style: ${p => p.theme.ghostButton.borderStyle};
  border-color: ${(() => {
    if ('hierarchy' in p && 'meaning' in p) {
      throw new Error(
        'Volatile Error: Button cannot be defined with both hierarchy and meaning.',
      )
    }

    if ('hierarchy' in p) {
      switch (p.hierarchy) {
        case 'primary':
          return p.theme.palette.primary.value
        case 'secondary':
          return p.theme.palette.secondary.value
        case 'tertiary':
          return p.theme.palette.tertiary.value
        case 'quaternary':
          return p.theme.palette.quaternary.value
      }
    }

    if ('meaning' in p) {
      switch (p.meaning) {
        case 'success':
          return p.theme.palette.success.value
        case 'warning':
          return p.theme.palette.warning.value
        case 'danger':
          return p.theme.palette.danger.value
      }
    }
  })()};

  color: ${(() => {
    if ('hierarchy' in p && 'meaning' in p) {
      throw new Error(
        'Volatile Error: Button cannot be defined with both hierarchy and meaning.',
      )
    }

    if ('hierarchy' in p) {
      switch (p.hierarchy) {
        case 'primary':
          return p.theme.palette.primary.value
        case 'secondary':
          return p.theme.palette.secondary.value
        case 'tertiary':
          return p.theme.palette.tertiary.value
        case 'quaternary':
          return p.theme.palette.quaternary.value
      }
    }

    if ('meaning' in p) {
      switch (p.meaning) {
        case 'success':
          return p.theme.palette.success.value
        case 'warning':
          return p.theme.palette.warning.value
        case 'danger':
          return p.theme.palette.danger.value
      }
    }
  })()};
`

export const StyledButton = styled.button<StyledButtonProps>`
  ${p => styles(p)}
`

const GhostButton: FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default GhostButton
