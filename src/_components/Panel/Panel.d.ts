import { Color } from '../../_types/Color'
import { Position } from '../../_types/Position'

export interface StyledPanelProps {
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
  outlineColor?: string // CSS string
}

export interface PanelProps extends StyledPanelProps {
  colorHighlight?: {
    placement: Position
  } & Color
}
