import styled from 'styled-components'

export const H5 = styled.h5`
  color: ${p => p.theme.h5.color};
  font-family: ${p => p.theme.h5.fontFamily};
  font-size: ${p => p.theme.h5.fontSize};
  font-weight: ${p => p.theme.h5.fontWeight};
  font-style: ${p => p.theme.h5.fontStyle};
  line-height: ${p => `calc(${p.theme.h5.fontSize} * 1.4)`};
  letter-spacing: ${p => p.theme.h5.kerning};
  margin-bottom: ${p => p.theme.h5.marginBottom};
  text-transform: ${p => p.theme.h5.textTransform};
`

export default H5
