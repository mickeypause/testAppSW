export interface Theme {
  colors: {
    bg: string
    black: string
    white: string
    blue: string
    pink: string
    yellow: string
    gray: string
  }

  gaps: {
    small: string
    medium: string
    large: string
    extraLarge: string
  }
  fontSizes: {
    small: string
    medium: string
    large: string
    extraLarge: string
  }
  fontWeights: {
    normal: string
    bold: string
  }
  borderRadius: string
}

const theme: Theme = {
  colors: {
    bg: '#1A1A1A',
    gray: '#404040',
    black: '#000',
    white: '#fff',
    blue: '#2E67F8',
    pink: ' #9335fe',
    yellow: '#FFE81F',
  },
  gaps: {
    small: '8px',
    medium: '16px',
    large: '24px',
    extraLarge: '32px',
  },
  fontSizes: {
    small: '14px',
    medium: '16px',
    large: '24px',
    extraLarge: '32px',
  },
  fontWeights: {
    normal: '400',
    bold: '600',
  },
  borderRadius: '4px',
}
export default theme
