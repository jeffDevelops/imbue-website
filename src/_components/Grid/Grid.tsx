import React, { FC, HTMLAttributes, ReactElement, useMemo } from 'react'
import styled, { css, Theme } from 'styled-components'
import { GridAreaProps } from './GridArea'

interface GridProps extends HTMLAttributes<HTMLElement> {
  gridTemplateColumns: string
  gridTemplateRows: string
  gridTemplateAreas: string
  children: ReactElement<GridAreaProps> | ReactElement<GridAreaProps>[]
  gap?: string
  height?: string
}

const styles = (p: GridProps & { theme: Theme }) => css`
  display: grid;
  grid-template-columns: ${p.gridTemplateColumns};
  grid-template-rows: ${p.gridTemplateRows};
  grid-template-areas: ${p.gridTemplateAreas};
  gap: ${p.gap};
  width: 100%;
  height: ${p.height ? p.height : '100%'};
`

const StyledGrid = styled.section<GridProps>`
  ${p => styles(p)}
`

const Grid: FC<GridProps> = ({
  gridTemplateAreas,
  children,
  ...props
}: GridProps) => {
  const valid = useMemo(() => {
    const inputIsValid = gridTemplateAreas.trim().match(/(?:["'].+["']\s*)/)

    if (
      gridTemplateAreas !== 'inherit' &&
      gridTemplateAreas !== 'unset' &&
      gridTemplateAreas !== 'initial' &&
      !inputIsValid
    ) {
      console.error(
        'Invalid input for gridTemplateAreas. See https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas for usage.',
      )
      return false
    }

    React.Children.map(children, (child: any) => {
      if (!child?.props?.gridArea) {
        throw new Error(
          "Volatile runtime error: A child was passed to <Grid /> that does not have a gridArea prop and Volatile cannot guarantee that the grid will be rendered properly. Either use the provided <GridArea /> component and provide a gridArea prop, or implement your own children with a gridArea prop and use the value for that element's grid-area CSS property.",
        )
      }
    })

    return true
  }, [gridTemplateAreas, children])

  return (
    <StyledGrid gridTemplateAreas={gridTemplateAreas} {...props}>
      {children}
    </StyledGrid>
  )
}

export default Grid
