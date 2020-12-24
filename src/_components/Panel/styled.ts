import styled, { css, Theme } from 'styled-components'
import { StyledPanelProps } from './Panel.d'
import { getCSSForBoxShadow } from '../../_styled/utils/boxShadow'

export const styles = (
  p: StyledPanelProps & { theme: Theme },
) => css`
  position: relative; /* relative positioning for abolutely positioned PanelBorder ornaments */
  overflow: hidden;
  border-radius: ${p.theme.borderRadius};
  ${!p.outlined &&
  `background-color: ${
    p.backgroundColor || p.theme.panel.defaults.backgroundColor
  };`}
  color: ${p => p.theme.panel.foregroundColor};
  width: ${p.width || '100%'};
  min-width: ${p.minWidth || '0'};
  max-width: ${p.maxWidth || 'none'};
  height: ${p.height || '100%'};
  min-height: ${p.minHeight || '0'};
  max-height: ${p.maxHeight || 'none'};
  padding: ${p.padding || p.theme.panel.defaults.padding};
  ${!p.outlined &&
  `box-shadow: ${
    p.boxShadow || getCSSForBoxShadow(p.theme.boxShadow.default)
  };`}
  ${p.outlined &&
  `border: 2px solid ${
    p.outlineColor
      ? p.outlineColor
      : p.theme.panel.defaults.outlineColor
  };`}
`

export const StyledPanel = styled.section.attrs({
  className: 'panel',
})<StyledPanelProps>`
  ${p => styles(p)}
`
