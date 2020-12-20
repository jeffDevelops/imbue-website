import styled from 'styled-components'

export const H2 = styled.h2`
  color: ${p => p.theme.h2.color};
  font-family: ${p => p.theme.h2.fontFamily};
  font-size: ${p => p.theme.h2.fontSize};
  font-style: ${p => p.theme.h2.fontStyle};
  font-weight: ${p => p.theme.h2.fontWeight};
  line-height: ${p => `calc(${p.theme.h2.fontSize} * 1.4)`};
  letter-spacing: ${p => p.theme.h2.kerning};
  margin-bottom: ${p => p.theme.h2.marginBottom};
  text-transform: ${p => p.theme.h2.textTransform};
`

export default H2
