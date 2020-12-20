import React, { FC, ReactNode } from 'react'
import styled, { css, Theme } from 'styled-components'
import PanelBorder from './PanelBorder'
import { Color } from '../../_types/Color'
import { Position } from '../../_types/Position'

export interface PanelProps {
  children: ReactNode
  width?: string // CSS string
  minWidth?: string // CSS string
  maxWidth?: string // CSS string
  height?: string // CSS string
  minHeight?: string // CSS string
  maxHeight?: string // CSS string
  padding?: string // CSS string
  backgroundColor?: string // CSS string
  boxShadow?: string // CSS string
  outlined?: boolean
  colorHighlight?: {
    placement: Position
  } & Color
  outlineColor?: string // CSS string
}

export const styles = (p: PanelProps & { theme: Theme }) => css`
  position: relative; /* relative positioning for abolutely positioned PanelBorder ornaments */
  overflow: hidden;
  border-radius: ${p.theme.borderRadius};
  ${!p.outlined &&
  `background-color: ${
    p.backgroundColor || p.theme.panel.defaults.backgroundColor
  };`}
  color: ${p => p.theme.panel.foregroundColor};
  width: ${p.width || '100%'};
  min-width: ${p.minWidth || '0'};
  max-width: ${p.maxWidth || 'none'};
  height: ${p.height || '100%'};
  min-height: ${p.minHeight || '0'};
  max-height: ${p.maxHeight || 'none'};
  padding: ${p.padding || p.theme.panel.defaults.padding};
  ${!p.outlined && `box-shadow: ${p.boxShadow || p.theme.boxShadow.default};`}
  ${p.outlined &&
  `border: 2px solid ${
    p.outlineColor ? p.outlineColor : p.theme.panel.defaults.outlineColor
  };`}
`

export const StyledPanel = styled.section.attrs({
  className: 'panel',
})<PanelProps>`
  ${p => styles(p)}
`

const Panel: FC<PanelProps> = ({
  colorHighlight,
  children,
  ...props
}: PanelProps) => {
  if (
    colorHighlight &&
    !('hierarchy' in colorHighlight) &&
    !('meaning' in colorHighlight)
  )
    throw new Error(
      'Volatility error: no "meaning" nor "hierarchy" prop was provided to PanelBorder prop "colorHighlight"',
    )
  return (
    <StyledPanel {...props}>
      {colorHighlight && colorHighlight.hierarchy && (
        <PanelBorder
          hierarchy={colorHighlight.hierarchy}
          placement={colorHighlight.placement}
        />
      )}

      {colorHighlight && colorHighlight.meaning && (
        <PanelBorder
          meaning={colorHighlight.meaning}
          placement={colorHighlight.placement}
        />
      )}

      {children}
    </StyledPanel>
  )
}

export default Panel
