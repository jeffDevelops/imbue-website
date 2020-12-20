import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

export const StyledGridArea = styled.div<{ gridArea: string }>`
  grid-area: ${p => p.gridArea};
`

export interface GridAreaProps {
  children?: ReactNode
  gridArea: string
}

const GridArea: FC<GridAreaProps> = ({ children, gridArea }: GridAreaProps) => (
  <StyledGridArea gridArea={gridArea}>{children}</StyledGridArea>
)

export default GridArea
