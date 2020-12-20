import React, { FC, LabelHTMLAttributes, ReactText } from 'react'
import styled, { css, Theme } from 'styled-components'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactText
}

export const styles = (p: LabelProps & { theme: Theme }) => css<LabelProps>`
  text-transform: uppercase;
  font-family: ${p => p.theme.label.fontFamily};
  font-size: ${p => p.theme.label.fontSize};
  font-weight: ${p => p.theme.label.fontWeight};
  margin-bottom: 8px;
  letter-spacing: ${p.theme.label.kerning};
  color: ${p.theme.label.color};
  cursor: pointer;
`

const StyledLabel = styled.label<LabelProps>`
  ${p => styles(p)}
`

const Label: FC<LabelProps> = ({ ...props }: LabelProps) => {
  return <StyledLabel {...props}>{props.children}</StyledLabel>
}

export default Label
