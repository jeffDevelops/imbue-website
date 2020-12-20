import React from 'react'
import { ThemeProvider } from 'styled-components'
import TextInput from './_components/TextInput/TextInput'
import { GlobalStyles } from './_styled/GlobalStyles'
import { theme } from './_styled/Theme'
import Flex from './_styled/Flex'
import Panel from './_components/Panel/Panel'
import Grid from './_components/Grid/Grid'
import GridArea from './_components/Grid/GridArea'
import H1 from './_styled/H1'
import H2 from './_styled/H2'
import H3 from './_styled/H3'
import H4 from './_styled/H4'
import H5 from './_styled/H5'
import H6 from './_styled/H6'
import Body1 from './_styled/Body1'
import Body2 from './_styled/Body2'
import Button from './_components/Button/Button'
import GhostButton from './_components/GhostButton/GhostButton'
import TextButton from './_components/TextButton/TextButton'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Flex height="100vh" column alignItems="flex-start" padding="40px">
        <H1>volatility</H1>
        <H5>A design system builder for React and styled-components</H5>
      </Flex>

      <Flex column maxWidth="700px" margin="auto" alignItems="flex-start">
        <H2>Buttons</H2>
        <Body1>
          Buttons operate syntactically in three design dimensions: intent,
          hierarchy, and semantic meaning.
        </Body1>

        <Flex column margin="80px 0" alignItems="flex-start">
          <H5>Intent</H5>
          <Body1>
            You can achieve intent with separate components to differentiate
            calls-to-action, secondary actions (ghost buttons), or links. From
            there, you can use either...
          </Body1>
        </Flex>
      </Flex>

      <Flex alignItems="flex-start">
        <Flex
          column
          alignItems="flex-start"
          justifyContent="flex-start"
          padding="40px 20px 40px 32px"
          maxWidth="680px"
          height="100%"
        >
          <Panel
            outlined
            minHeight="716px"
            colorHighlight={{ placement: 'top', hierarchy: 'primary' }}
          >
            <H5>Color Hierarchy</H5>
            <Body1>
              You can achieve color hierarchy by passing a hierarchy prop, from
              primary to quaternary values. By default, these are your theme
              colors.
            </Body1>

            <Flex height="40px" />

            <Grid
              height="auto"
              gridTemplateColumns={
                'repeat(2, minmax(150px, 1fr))  minmax(110px, .75fr)'
              }
              gridTemplateRows={'72px repeat(4, 100px)'}
              gridTemplateAreas={`
                'CTA SecondaryAction Link'
                'one two three'
                'four five six'
                'seven eight nine'
                'ten eleven twelve'
              `}
            >
              <GridArea gridArea="CTA">
                <Flex width="100%" height="100%">
                  <H6>Button</H6>
                </Flex>
              </GridArea>

              <GridArea gridArea="SecondaryAction">
                <Flex width="100%" height="100%">
                  <H6>Ghost Button</H6>
                </Flex>
              </GridArea>

              <GridArea gridArea="Link">
                <Flex width="100%" height="100%">
                  <H6>Link Button</H6>
                </Flex>
              </GridArea>

              <GridArea gridArea="one">
                <Flex width="100%" height="100%">
                  <Button width="155px" hierarchy="primary">
                    Primary
                  </Button>
                </Flex>
              </GridArea>

              <GridArea gridArea="two">
                <Flex width="100%" height="100%">
                  <GhostButton width="155px" hierarchy="primary">
                    Primary
                  </GhostButton>
                </Flex>
              </GridArea>

              <GridArea gridArea="three">
                <Flex width="100%" height="100%">
                  <TextButton width="155px" hierarchy="primary">
                    Primary
                  </TextButton>
                </Flex>
              </GridArea>

              <GridArea gridArea="four">
                <Flex width="100%" height="100%">
                  <Button width="155px" hierarchy="secondary">
                    Secondary
                  </Button>
                </Flex>
              </GridArea>

              <GridArea gridArea="five">
                <Flex width="100%" height="100%">
                  <GhostButton width="155px" hierarchy="secondary">
                    Secondary
                  </GhostButton>
                </Flex>
              </GridArea>

              <GridArea gridArea="six">
                <Flex width="100%" height="100%">
                  <TextButton width="155px" hierarchy="secondary">
                    Secondary
                  </TextButton>
                </Flex>
              </GridArea>

              <GridArea gridArea="seven">
                <Flex width="100%" height="100%">
                  <Button width="155px" hierarchy="tertiary">
                    Tertiary
                  </Button>
                </Flex>
              </GridArea>

              <GridArea gridArea="eight">
                <Flex width="100%" height="100%">
                  <GhostButton width="155px" hierarchy="tertiary">
                    Tertiary
                  </GhostButton>
                </Flex>
              </GridArea>

              <GridArea gridArea="nine">
                <Flex width="100%" height="100%">
                  <TextButton width="155px" hierarchy="tertiary">
                    Tertiary
                  </TextButton>
                </Flex>
              </GridArea>

              <GridArea gridArea="ten">
                <Flex width="100%" height="100%">
                  <Button width="155px" hierarchy="quaternary">
                    Quaternary
                  </Button>
                </Flex>
              </GridArea>

              <GridArea gridArea="eleven">
                <Flex width="100%" height="100%">
                  <GhostButton width="155px" hierarchy="quaternary">
                    Quaternary
                  </GhostButton>
                </Flex>
              </GridArea>

              <GridArea gridArea="twelve">
                <Flex width="100%" height="100%">
                  <TextButton width="155px" hierarchy="quaternary">
                    Quaternary
                  </TextButton>
                </Flex>
              </GridArea>
            </Grid>
          </Panel>
        </Flex>

        <Flex
          column
          alignItems="flex-start"
          justifyContent="flex-start"
          padding="40px 32px 40px 20px"
          maxWidth="680px"
        >
          <Panel
            outlined
            minHeight="716px"
            colorHighlight={{ placement: 'top', meaning: 'success' }}
          >
            <H5>Color Semantics</H5>
            <Body1>
              You can achieve semantic meaning by passing your button a meaning
              prop. These are configurable, but it's recommended to stick with
              accessible shades of green, yellow, and red.
            </Body1>

            <Flex height="40px" />

            <Grid
              height="auto"
              gap="1px"
              gridTemplateColumns={
                'repeat(2, minmax(150px, 1fr))  minmax(110px, .75fr)'
              }
              gridTemplateRows={'72px repeat(3, 100px)'}
              gridTemplateAreas={`
                'CTA SecondaryAction Link'
                'one two three'
                'four five six'
                'seven eight nine'
            `}
            >
              <GridArea gridArea="CTA">
                <Flex width="100%" height="100%">
                  <H6>Button</H6>
                </Flex>
              </GridArea>

              <GridArea gridArea="SecondaryAction">
                <Flex width="100%" height="100%">
                  <H6>Ghost Button</H6>
                </Flex>
              </GridArea>

              <GridArea gridArea="Link">
                <Flex width="100%" height="100%">
                  <H6>Link Button</H6>
                </Flex>
              </GridArea>

              <GridArea gridArea="one">
                <Flex width="100%" height="100%">
                  <Button width="155px" meaning="success">
                    Success
                  </Button>
                </Flex>
              </GridArea>

              <GridArea gridArea="two">
                <Flex width="100%" height="100%">
                  <GhostButton width="155px" meaning="success">
                    Success
                  </GhostButton>
                </Flex>
              </GridArea>

              <GridArea gridArea="three">
                <Flex width="100%" height="100%">
                  <TextButton width="155px" meaning="success">
                    Success
                  </TextButton>
                </Flex>
              </GridArea>

              <GridArea gridArea="four">
                <Flex width="100%" height="100%">
                  <Button width="155px" meaning="warning">
                    Warning
                  </Button>
                </Flex>
              </GridArea>

              <GridArea gridArea="five">
                <Flex width="100%" height="100%">
                  <GhostButton width="155px" meaning="warning">
                    Warning
                  </GhostButton>
                </Flex>
              </GridArea>

              <GridArea gridArea="six">
                <Flex width="100%" height="100%">
                  <TextButton width="155px" meaning="warning">
                    Warning
                  </TextButton>
                </Flex>
              </GridArea>

              <GridArea gridArea="seven">
                <Flex width="100%" height="100%">
                  <Button width="155px" meaning="danger">
                    Danger
                  </Button>
                </Flex>
              </GridArea>

              <GridArea gridArea="eight">
                <Flex width="100%" height="100%">
                  <GhostButton width="155px" meaning="danger">
                    Danger
                  </GhostButton>
                </Flex>
              </GridArea>

              <GridArea gridArea="nine">
                <Flex width="100%" height="100%">
                  <TextButton width="155px" meaning="danger">
                    Danger
                  </TextButton>
                </Flex>
              </GridArea>
            </Grid>
          </Panel>
        </Flex>
      </Flex>

      <Flex padding="16px">
        <Grid
          height="auto"
          gap="16px"
          gridTemplateColumns={'1fr 2fr'}
          gridTemplateRows={'auto auto auto'}
          gridTemplateAreas={`            
          'TextInput Text'
          'PanelOutline PanelShadow'
          'PanelHighlighted PanelOutlinedHighlighted'
          `}
        >
          <GridArea gridArea="Text">
            <Flex
              padding="24px 32px"
              maxWidth="1150px"
              column
              alignItems="flex-start"
            >
              <H2>Typography</H2>
              <H1>H1: Sphinx of black quartz, judge my vow</H1>
              <H2>H2: Sphinx of black quartz, judge my vow</H2>
              <H3>H3: Sphinx of black quartz, judge my vow</H3>
              <H4>H4: Sphinx of black quartz, judge my vow</H4>
              <H5>H5: Sphinx of black quartz, judge my vow</H5>
              <H6>H6: Sphinx of black quartz, judge my vow</H6>
              <Body1>
                Body1: Banh mi hot chicken lyft, irony lomo jianbing iPhone
                cardigan mlkshk gluten-free. Cred tbh succulents tumblr meh
                listicle polaroid readymade pug leggings. Neutra af chambray
                knausgaard tumeric cardigan. Espresso, not "expresso." Hot yoga
                not ergonomic London Fog.
              </Body1>
              <Body2>
                Body2: PBR&B everyday carry cred, squid la croix meggings tacos
                church-key DIY blue bottle gastropub meh waistcoat. Blog
                thundercats pug actually sustainable farm-to-table. Chicharrones
                freegan viral snackwave. Before it was cool. Beard oil foodie
                bacon-wrapped tannin canteen salve Aperol Spritz.
              </Body2>
            </Flex>
          </GridArea>
          <GridArea gridArea="TextInput">
            <Flex
              alignItems="flex-start"
              padding="24px 32px"
              maxWidth="700px"
              column
            >
              <H2>TextInput</H2>
              <TextInput margin="0 0 24px" placeholder="Placeholder only" />
              <TextInput
                id="with_label"
                margin="24px 0"
                placeholder="Your text here..."
                label="With label and error message"
                error="Something's not right"
              />
              <TextInput id="inset" margin="24px 0" placeholder="With inset" />
            </Flex>
          </GridArea>
          <GridArea gridArea="PanelOutline">
            <Panel outlined>
              <H2>Here's a panel</H2>

              <Body1>
                Banh mi hot chicken lyft, irony lomo jianbing iPhone cardigan
                mlkshk gluten-free. Cred tbh succulents tumblr meh listicle
                polaroid readymade pug leggings. Neutra af chambray knausgaard
                tumeric cardigan.
              </Body1>
            </Panel>
          </GridArea>
          <GridArea gridArea="PanelShadow">
            <Panel>
              <H3>Here's another panel</H3>

              <Body1>
                Banh mi hot chicken lyft, irony lomo jianbing iPhone cardigan
                mlkshk gluten-free. Cred tbh succulents tumblr meh listicle
                polaroid readymade pug leggings. Neutra af chambray knausgaard
                tumeric cardigan.
              </Body1>

              <H4>Here's some fine print</H4>

              <Body2>
                Banh mi hot chicken lyft, irony lomo jianbing iPhone cardigan
                mlkshk gluten-free. Cred tbh succulents tumblr meh listicle
                polaroid readymade pug leggings. Neutra af chambray knausgaard
                tumeric cardigan.
              </Body2>
            </Panel>
          </GridArea>
          <GridArea gridArea="PanelHighlighted">
            <Panel colorHighlight={{ meaning: 'warning', placement: 'left' }}>
              <H2>Oh, jeez</H2>

              <Body1>
                Banh mi hot chicken lyft, irony lomo jianbing iPhone cardigan
                mlkshk gluten-free. Cred tbh succulents tumblr meh listicle
                polaroid readymade pug leggings. Neutra af chambray knausgaard
                tumeric cardigan.
              </Body1>
            </Panel>
          </GridArea>
          <GridArea gridArea="PanelOutlinedHighlighted">
            <Panel
              outlined
              colorHighlight={{ meaning: 'danger', placement: 'left' }}
            >
              <H5>Yikes</H5>

              <Body1>
                Banh mi hot chicken lyft, irony lomo jianbing iPhone cardigan
                mlkshk gluten-free. Cred tbh succulents tumblr meh listicle
                polaroid readymade pug leggings. Neutra af chambray knausgaard
                tumeric cardigan.
              </Body1>

              <H6>Hopefully this will solve your problem:</H6>

              <Body2>
                Banh mi hot chicken lyft, irony lomo jianbing iPhone cardigan
                mlkshk gluten-free. Cred tbh succulents tumblr meh listicle
                polaroid readymade pug leggings. Neutra af chambray knausgaard
                tumeric cardigan.
              </Body2>
            </Panel>
          </GridArea>
        </Grid>
      </Flex>
    </ThemeProvider>
  )
}

export default App
