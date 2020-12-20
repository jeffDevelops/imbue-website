import React, { FC, InputHTMLAttributes } from 'react'
import styled, { css, Theme } from 'styled-components'
import Label, { LabelProps } from '../Label/Label'
import Flex from '../../_styled/Flex'
import { getCSSForBoxShadow } from '../../_styled/utils/boxShadow'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  LabelProps?: LabelProps
  margin?: string // CSS value
  error?: string // An error message indicating what is invalid about the user's input
}

export const borderAnimationStyles = (
  p: TextInputProps & { theme: Theme },
) => css`
  &:after {
    content: ' ';
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 0;
    background-color: ${p.error
      ? p.theme.palette.danger.value
      : p.theme.palette.primary.value};
    height: 10px;
    z-index: 0;
    border-radius: 0 0 8px 8px;
    transition: width ease-in 0.2s;
  }
`

export const RelativeContext = styled.div<TextInputProps>`
  width: 100%;
  padding-bottom: 24px;

  ${p => borderAnimationStyles(p)}

  ${p =>
    p.error &&
    `
    &:after {
      width: 100%;
      transition: width ease-out 0.3s;
    }
  `}

  &:focus-within {
    &:after {
      width: 100%;
      transition: width ease-out 0.3s;
    }
  }
`

export const styles = (
  p: TextInputProps & { theme: Theme },
) => css<TextInputProps>`
  position: relative;
  z-index: 1;
  background-color: ${p.theme.palette.background};
  border: ${p => (p.theme.textInput.border ? p.theme.textInput.border : 0)};
  border-radius: ${p.theme.borderRadius};
  box-shadow: ${(() => {
    if (p.error) return 'none'
    return getCSSForBoxShadow(p.theme.boxShadow.default)
  })()};
  font-family: ${p.theme.textInput.fontFamily};
  font-size: ${p.theme.textInput.fontSize};
  color: ${p.theme.textInput.color};
  letter-spacing: ${p.theme.textInput.kerning};
  height: 56px;
  outline: none;
  padding: 8px 12px;
  transition: box-shadow 0.2s;
  width: 100%;

  &:focus {
    box-shadow: ${getCSSForBoxShadow(p.theme.boxShadow.pronouncedInset)};
    transition: box-shadow 0.3s;
  }

  &::placeholder {
    color: ${p.theme.textInput.placeholderColor};
  }
`

export const StyledTextInput = styled.input<TextInputProps>`
  ${p => styles(p)}
`

export const InputErrorMessage = styled.div`
  position: absolute;
  bottom: -4px;
  color: ${p => p.theme.palette.danger.value};
  line-height: 16px;
  font-size: 14px;
  letter-spacing: ${p => p.theme.textInput.kerning};
  font-family: ${p => p.theme.textInput.fontFamily};
`

const TextInput: FC<TextInputProps> = ({
  LabelProps,
  label,
  margin,
  ...props
}: TextInputProps) => {
  return (
    <Flex position="relative" column alignItems="flex-start" margin={margin}>
      {label && (
        <Label htmlFor={props.id} {...LabelProps}>
          {label}
        </Label>
      )}
      <RelativeContext {...props}>
        <StyledTextInput {...props} />
        {props.error && <InputErrorMessage>{props.error}</InputErrorMessage>}
      </RelativeContext>
    </Flex>
  )
}

export default TextInput
