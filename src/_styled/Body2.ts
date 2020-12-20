import styled from 'styled-components'

export const Body2 = styled.p`
  color: ${p => p.theme.body2.color};
  font-family: ${p => p.theme.body2.fontFamily};
  font-size: ${p => p.theme.body2.fontSize};
  font-style: ${p => p.theme.body2.fontStyle};
  font-weight: ${p => p.theme.body2.fontWeight};
  line-height: ${p => `calc(${p.theme.body2.fontSize} * 1.4)`};
  letter-spacing: ${p => p.theme.body2.kerning};
  margin-bottom: ${p => p.theme.body2.marginBottom};
  text-transform: ${p => p.theme.body2.textTransform};

  &:last-of-type {
    margin-bottom: 0;
  }
`

export default Body2
