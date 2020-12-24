import { Cursor } from '../Cursor'

export interface HandleProps {
  backgroundColor: string

  /**
   * When the drawer opens horizontally from the left/right edges,
   * the curser that is displayed on the handle bar
   */
  cursorX: Cursor

  /**
   * When the drawer opens vertically from the top/bottom edges,
   * the curser that is displayed on the handle bar
   */
  cursorY: Cursor

  /**
   *  Because the handle could be vertically or
   *  horizontally oriented, `relativeLength` refers to the
   *  length of the handle bar, no matter if it's oriented
   *  horizontally or vertically. A relative value should
   *  be provided (i.e. 30%), so that the bar isn't unruly
   *  on smaller drawers. An explicit (px) width should be
   *  provided for `minLength` and `maxLength`--min- to ensure
   *  accessibility on really small drawers, and max- to
   *  reel in the width on large drawers.
   */
  relativeLength: string

  /**
   *  An explicit (i.e. px) constraint to ensure that the
   *  handle bar is accessible on small drawers; if your
   *  drawer is small enough for this to be an issue, you
   *  likely should rethink the UI.
   */
  minLength: string

  /**
   *  An explicit (i.e. px) constraint to ensure that the
   *  handle bar isn't a mile long on large drawers.
   */
  maxLength: string

  /**
   *  The thickness of the handle bar (perpendicular to the
   *  direction the drawer opens)
   */
  thickness: string
}

export interface DrawerStyles {
  handle: HandleProps
}
