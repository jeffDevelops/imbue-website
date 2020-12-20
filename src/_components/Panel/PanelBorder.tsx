import React, { FC, HTMLAttributes } from 'react'
import styled, { css, Theme } from 'styled-components'
import { Position } from '../../_types/Position'
import { Color } from '../../_types/Color'

export type StyledPanelBorderProps = {
  placement: 'top' | 'left' | 'right' | 'bottom'
} & Color

export const styles = (p: StyledPanelBorderProps & { theme: Theme }) => css`
  position: absolute;
  ${p.placement === 'top' && 'top: 0; left: 0;'}
  ${p.placement === 'left' && 'left: 0; top: 0;'}
  ${p.placement === 'right' && 'right: 0; top: 0;'}
  ${p.placement === 'bottom' && 'bottom: 0; left: 0;'}

  height: ${p.placement === 'top' || p.placement === 'bottom'
    ? p.theme.borderRadius
    : '100%'};
  width: ${p.placement === 'top' || p.placement === 'bottom'
    ? '100%'
    : p.theme.borderRadius};
  background-color: ${(() => {
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

const StyledPanelBorder = styled.div<StyledPanelBorderProps>`
  ${p => styles(p)}
`

export interface DivAndPlacement extends HTMLAttributes<HTMLDivElement> {
  placement: Position
}

export type PanelBorderProps = Color & DivAndPlacement

const PanelBorder: FC<PanelBorderProps> = ({ ...props }: PanelBorderProps) => (
  <StyledPanelBorder {...props} />
)

export default PanelBorder
