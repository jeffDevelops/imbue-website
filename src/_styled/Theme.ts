import { Theme } from 'styled-components'

export const theme: Theme = {
  h1: {
    color: '#637081',
    fontFamily: "'JetBrains Mono', sans-serif",
    fontSize: '40px',
    fontStyle: 'italic',
    kerning: '3px',
    fontWeight: '600',
    marginBottom: '32px',
  },
  h2: {
    color: '#637081',
    fontFamily: "'JetBrains Mono', sans-serif",
    fontSize: '32px',
    fontStyle: 'italic',
    kerning: '2.5px',
    fontWeight: '600',
    marginBottom: '28px',
  },
  h3: {
    color: '#637081',
    fontFamily: "'Barlow', sans-serif",
    fontSize: '30px',
    fontStyle: 'normal',
    kerning: '3px',
    fontWeight: '800',
    marginBottom: '24px',
  },
  h4: {
    color: '#637081',
    fontFamily: "'JetBrains Mono', sans-serif",
    fontSize: '26px',
    fontStyle: 'normal',
    kerning: '2px',
    fontWeight: '800',
    marginBottom: '22px',
  },
  h5: {
    color: '#A3B0C1',
    fontFamily: "'Barlow', sans-serif",
    fontSize: '20px',
    fontStyle: 'normal',
    kerning: '2.25px',
    fontWeight: '800',
    marginBottom: '20px',
    textTransform: 'uppercase',
  },
  h6: {
    color: '#A3B0C1',
    fontFamily: "'Barlow', sans-serif",
    fontSize: '18px',
    fontStyle: 'normal',
    kerning: '1.5px',
    fontWeight: '600',
    marginBottom: '16px',
  },
  body1: {
    color: '#637081',
    fontFamily: "'Barlow', sans-serif",
    fontSize: '16px',
    fontStyle: 'normal',
    kerning: '1.25px',
    fontWeight: '300',
    marginBottom: '24px',
  },
  body2: {
    color: '#A3B0C1',
    fontFamily: "'Barlow', sans-serif",
    fontSize: '16px',
    fontStyle: 'normal',
    kerning: '1.25px',
    fontWeight: '300',
    marginBottom: '24px',
  },
  label: {
    color: '#637081',
    fontFamily: "'Barlow', sans-serif",
    fontSize: '14px',
    kerning: '1px',
    fontWeight: '600',
  },
  textInput: {
    placeholderColor: '#AAC1D0',
    color: '#637081',
    border: '1px solid #DCE3FD',
    fontFamily: "'Barlow', sans-serif",
    fontSize: '16px',
    kerning: '1px',
    fontWeight: '600',
  },
  panel: {
    defaults: {
      backgroundColor: '#F6FAFD',
      foregroundColor: '#4f565e',
      outlineColor: '#DCE3FD',
      padding: '40px 48px',
    },
  },
  button: {
    height: '40px',
    width: 'auto',
    textTransform: 'uppercase',
    fontFamily: '"Barlow", sans-serif',
    fontSize: '16px',
    kerning: '3px',
    fontStyle: 'normal',
    fontWeight: '800',
    padding: '0px 24px',
    border: 'none',
    outline: 'none',
  },
  ghostButton: {
    height: '40px',
    width: 'auto',
    textTransform: 'uppercase',
    fontFamily: '"Barlow", sans-serif',
    fontSize: '16px',
    kerning: '3px',
    fontStyle: 'normal',
    fontWeight: '800',
    padding: '0px 24px',
    outline: 'none',
    borderWidth: '2px',
    borderStyle: 'solid',
  },
  textButton: {
    textTransform: 'none',
    fontFamily: '"Barlow", sans-serif',
    fontSize: '18px',
    kerning: '2px',
    fontStyle: 'normal',
    fontWeight: '800',
    outline: 'none',
  },
  palette: {
    primary: {
      value: '#229BF2',
      contrast: '#FFFFFA',
    },
    secondary: {
      value: '#62BFFF',
      contrast: '#FFFFFA',
    },
    tertiary: {
      value: '#536B78',
      contrast: '#FFFFFA',
    },
    quaternary: {
      value: '#7C98B3',
      contrast: '#FFFFFA',
    },

    disabled: {
      value: '#ACCBE1',
      contrast: '#FFFFFA',
    },

    danger: {
      value: '#F05D5E',
      contrast: '#FFFFFA',
    },
    warning: {
      // value: '#FFB140',
      value: '#FFBA49',
      contrast: '#FFFFFA',
    },
    success: {
      value: '#48BF84',
      contrast: '#FFFFFA',
    },

    background: '#FFFFFA',
    componentBackground: '#E1E8FF',

    // TODO: Collapse into background when capability to switch to dark mode implemented
    backgroundDark: '#222324',
    componentBackgroundDark: '#4F565E',
  },

  borderRadius: '8px',

  boxShadow: {
    default: [
      {
        xOffset: '1px',
        yOffset: '2px',
        blurRadius: '6px',
        color: '#CEE5F2',
      },
    ],
    defaultInset: [
      {
        xOffset: '1px',
        yOffset: '2px',
        blurRadius: '6px',
        color: '#CEE5F2',
        inset: true,
      },
    ],
    pronounced: [
      {
        xOffset: '1px',
        yOffset: '3px',
        blurRadius: '7px',
        color: '#CEE5F2',
      },
    ],
    pronouncedInset: [
      {
        xOffset: '1px',
        yOffset: '3px',
        blurRadius: '7px',
        color: '#CEE5F2',
        inset: true,
      },
    ],
  },
}

/* https://coolors.co/cee5f2-accbe1-7c98b3-637081-536b78 */
