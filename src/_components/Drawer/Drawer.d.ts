import { ReactHTML, ReactHTMLElement } from 'react'
import { Theme } from 'styled-components'
import { theme } from '../../_styled/Theme'
import { Color } from '../../_types/Color'
import { Overflow } from '../../_types/Overflow'

export interface DrawerContentProps {
  /**
   *  Passed directly by the Drawer component, so that the content
   *  knows how to render margin that accounts for the drawer handle
   */
  origin: Position

  /**
   * The Content's overflow-y property; default is 'auto'
   */
  overflowY: Overflow

  /**
   * The Content's overflow-x property; default is 'hidden'
   */
  overflowX: Overflow

  /**
   * The element child rendered within the drawer (i.e. a nav)
   */
  as?: keyof ReactHTML
}

export interface SnappingOptions {
  /**
   * The pixel value at which the drawer snaps (relative to how "open" the drawer is)
   */
  snapExtent?: number

  /**
   * Number of pixels beyond the snap point the user must drag to "snap out" of position;
   * defaults to 25px
   */
  snapTolerance?: number
}

export interface StyledDrawerProps {
  /**
   *  Position options exposed to adhere drawer origins to containers
   *  other than the window (default is 'fixed')
   *
   */
  position?: 'absolute' | 'fixed' | 'sticky'

  /**
   * z-index property exposed if the drawer needs to slide under/over certain
   * other elements in the stacking order
   */
  zIndex: number

  /**
   *  CSS value for how much the drawer should be allowed to
   *  hide at its origination; defaults to 0 px, in which case
   *  the handle is fixed to edge of its container
   */
  minOpenExtent: number
  /**
   *  From which side of the container the drawer originates
   */
  origin: Position

  /**
   * Length of the drawer itself; defaults to 100% of the container
   */
  length?: string

  /**
   *  CSS pixel value for how much the drawer should be able to expand
   *  from its originating side; defaults to 100% of the container.
   *  If relativeTo is assigned to 'window', 'fullLength' refers to
   *  window.innerWidth / window.innerHeight, depending upon orientation.
   *  If relativeTo is assiged to 'parent', 'fullLength' refers to the
   *  parent's height or width, depending upon orientation. If an integer
   *  value is provided that exceeds the fullLength of the container or
   *  window, the appropriate max length is used.
   */
  maxOpenExtent: number | 'fullLength'
}

export interface DrawerProps extends StyledDrawerProps {
  /**
   *  Tells the Drawer how to calculate certain layout constraints, like
   *  snapping and maxOpenExtent. For example, if you've assigned an
   *  'absolute' position, you might want the drawer to behave relative to
   *  a container that has `position: relative;`, or you might want to adhere
   *  the drawer to a certain point relative to the page. In those cases,
   *  snapping and maxOpenExtent calculations would need to be relative to
   *  the parent container, or to the window.
   *
   *  Defaults to 'window'
   */
  relativeTo?: 'window' | 'parent'

  /**
   *  Initial extent to which the drawer is open; defaults to "0px"
   */
  initialOpenExtent?: number

  /**
   *  If a certain layout is desired, you have the drawer "snap" to
   *  a certain pixel value
   */
  snapping?: SnappingOptions

  /**
   * Props passed to the Drawer's inner Content component (where the
   * render props children are rendered)
   */
  ContentProps?: DrawerContentProps
}

export interface DrawerState {
  openExtent: number
  isSnapping: boolean
}

export interface DrawerContent {
  as?: keyof ReactHTML
}
