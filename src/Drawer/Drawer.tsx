import React from 'react'
import Drawer from '../_components/Drawer/Drawer'
import Panel from '../_components/Panel/Panel'
import Flex from '../_styled/Flex'
import H2 from '../_styled/H2'
import H4 from '../_styled/H4'
import Body1 from '../_styled/Body1'

const DrawerOverview = () => {
  return (
    <>
      <Drawer
        zIndex={4}
        position="fixed"
        initialOpenExtent={0}
        minOpenExtent={0}
        maxOpenExtent={300}
        origin="right"
      >
        {({ width }) => <>Hello, I'm {width}px wide!</>}
      </Drawer>

      <Flex height="100vh">
        <Panel
          height="65%"
          maxHeight="550px"
          width="65%"
          maxWidth="550px"
          colorHighlight={{
            placement: 'top',
            hierarchy: 'primary',
          }}
        >
          <H2>Drawer</H2>
          <Body1>
            The Drawer component is extremely versatile. You can
            orient it to the top, right, bottom or left of the
            window by providing a fixed position, or you can
            adhere it to the sides of any relatively positioned
            container.
          </Body1>

          <Body1>
            The Drawer uses the render props pattern to provide
            width and height values to its children, so that you
            can render different layouts within the drawer based
            on the extent to which the drawer is open.
          </Body1>

          <Body1>
            Conversely, you can optionally lift the drawer's
            state to ancestor components if they need to
            orchestrate dimensions to drawer siblings.
          </Body1>

          <Drawer
            zIndex={3}
            relativeTo="parent"
            position="absolute"
            initialOpenExtent={0}
            minOpenExtent={0}
            maxOpenExtent="fullLength"
            origin="left"
            snapping={{
              snapExtent: 150,
            }}
          >
            {({ width }) => <>Hello, I'm {width}px wide!</>}
          </Drawer>

          <Drawer
            zIndex={2}
            relativeTo="parent"
            position="absolute"
            initialOpenExtent={0}
            minOpenExtent={0}
            maxOpenExtent="fullLength"
            origin="right"
            snapping={{
              snapExtent: 150,
            }}
          >
            {() => (
              <Flex
                column
                alignItems="flex-start"
                padding="40px 24px"
              >
                <H4>maxOpenExtent="fullLength"</H4>
                <Body1>
                  The Drawer component can be oriented to any
                  side parallel to the X and Y axes, and so
                  "width" and "height" become somewhat unclear,
                  since they carry semantic meaning within layout
                  CSS.
                </Body1>

                <Body1>
                  To disambiguate, "length" was chosen as a
                  descriptive API for an arbitrary distance.
                </Body1>

                <Body1>
                  "Open extent" refers to the extent to which the
                  drawer is open. You can provide the literal
                  type "fullLength" to the maxOpenExtent prop to
                  allow the drawer to open all the way to the
                  opposing edge of the container or window.
                </Body1>

                <Body1>
                  This drawer demonstrates that in action.
                </Body1>
              </Flex>
            )}
          </Drawer>
        </Panel>
      </Flex>

      <Drawer
        zIndex={5}
        position="fixed"
        initialOpenExtent={0}
        minOpenExtent={0}
        maxOpenExtent={300}
        origin="top"
        snapping={{
          snapExtent: 150,
        }}
      >
        {({ height }) => <>Hello, I'm {height}px high!</>}
      </Drawer>

      <Drawer
        zIndex={1}
        position="fixed"
        initialOpenExtent={0}
        minOpenExtent={0}
        maxOpenExtent={300}
        origin="bottom"
        snapping={{
          snapExtent: 150,
        }}
      >
        {({ height }) => <>Hello, I'm {height}px high!</>}
      </Drawer>
    </>
  )
}

export default DrawerOverview
