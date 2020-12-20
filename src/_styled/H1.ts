import styled from 'styled-components'

export const H1 = styled.h1`
  color: ${p => p.theme.h1.color};
  font-family: ${p => p.theme.h1.fontFamily};
  font-size: ${p => p.theme.h1.fontSize};
  font-style: ${p => p.theme.h1.fontStyle};
  font-weight: ${p => p.theme.h1.fontWeight};
  line-height: ${p => `calc(${p.theme.h1.fontSize} * 1.4)`};
  letter-spacing: ${p => p.theme.h1.kerning};
  margin-bottom: ${p => p.theme.h1.marginBottom};
  text-transform: ${p => p.theme.h1.textTransform};
`

export default H1
