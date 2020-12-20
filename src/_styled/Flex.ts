import styled from 'styled-components'

type FlexItemBehavior =
  | 'space-between'
  | 'center'
  | 'space-around'
  | 'space-evenly'
  | 'flex-start'
  | 'flex-end'

interface Props {
  column?: boolean
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justifyContent?: FlexItemBehavior
  alignItems?: FlexItemBehavior
  width?: string // css value
  height?: string // css value
  maxWidth?: string // css value
  maxHeight?: string // css value
  minWidth?: string // css value
  minHeight?: string // css value
  margin?: string // css value
  padding?: string // css value
  position?: 'absolute' | 'relative' | 'static' | 'fixed' | 'sticky'
  zIndex?: number
  gridArea?: string
}

const Flex = styled.div<Props>`
  ${p => p.gridArea && `grid-area: ${p.gridArea};`};
  display: flex;
  flex-direction: ${p => {
    if (p.column) return 'column'
    if (p.flexDirection) return p.flexDirection
    return 'row'
  }};
  justify-content: ${p => p.justifyContent || 'center'};
  align-items: ${p => p.alignItems || 'center'};
  width: ${p => p.width || '100%'};
  height: ${p => p.height || 'auto'};
  max-width: ${p => p.maxWidth || 'none'};
  max-height: ${p => p.maxHeight || 'none'};
  min-width: ${p => p.minWidth || '0'};
  min-height: ${p => p.minHeight || '0'};
  position: ${p => p.position || 'static'};
  z-index: ${p => p.zIndex || 1};
  margin: ${p => p.margin || 'initial'};
  padding: ${p => p.padding || 'initial'};
`

export default Flex
