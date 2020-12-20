import styled from 'styled-components'

export const H4 = styled.h4`
  color: ${p => p.theme.h4.color};
  font-family: ${p => p.theme.h4.fontFamily};
  font-size: ${p => p.theme.h4.fontSize};
  font-style: ${p => p.theme.h4.fontStyle};
  font-weight: ${p => p.theme.h4.fontWeight};
  line-height: ${p => `calc(${p.theme.h4.fontSize} * 1.4)`};
  letter-spacing: ${p => p.theme.h4.kerning};
  margin-bottom: ${p => p.theme.h4.marginBottom};
  text-transform: ${p => p.theme.h4.textTransform};
`

export default H4
