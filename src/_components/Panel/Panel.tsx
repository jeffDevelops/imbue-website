import React, { FC, ReactNode } from 'react'
import { PanelProps } from './Panel.d'
import PanelBorder from './PanelBorder'
import { StyledPanel } from './styled'

export interface Props extends PanelProps {
  children: ReactNode
}

const Panel: FC<Props> = ({
  colorHighlight,
  children,
  ...props
}: Props) => {
  if (
    colorHighlight &&
    !('hierarchy' in colorHighlight) &&
    !('meaning' in colorHighlight)
  )
    throw new Error(
      'Imbue error: no "meaning" nor "hierarchy" prop was provided to PanelBorder prop "colorHighlight"',
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
