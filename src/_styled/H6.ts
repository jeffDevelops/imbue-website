import styled from 'styled-components'

export const H6 = styled.h6`
  color: ${p => p.theme.h6.color};
  font-family: ${p => p.theme.h6.fontFamily};
  font-size: ${p => p.theme.h6.fontSize};
  font-style: ${p => p.theme.h6.fontStyle};
  font-weight: ${p => p.theme.h6.fontWeight};
  line-height: ${p => `calc(${p.theme.h6.fontSize} * 1.4)`};
  letter-spacing: ${p => p.theme.h6.kerning};
  margin-bottom: ${p => p.theme.h6.marginBottom};
  text-transform: ${p => p.theme.h6.textTransform};
`

export default H6
