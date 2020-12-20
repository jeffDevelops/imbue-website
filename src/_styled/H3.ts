import styled from 'styled-components'

export const H3 = styled.h3`
  color: ${p => p.theme.h3.color};
  font-family: ${p => p.theme.h3.fontFamily};
  font-size: ${p => p.theme.h3.fontSize};
  font-style: ${p => p.theme.h3.fontStyle};
  font-weight: ${p => p.theme.h3.fontWeight};
  line-height: ${p => `calc(${p.theme.h3.fontSize} * 1.4)`};
  letter-spacing: ${p => p.theme.h3.kerning};
  margin-bottom: ${p => p.theme.h3.marginBottom};
  text-transform: ${p => p.theme.h3.textTransform};
`

export default H3
