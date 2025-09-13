import { grey } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    subfullhd: true
    fullhd: true
  }

  interface Palette {
    misc: MiscColors
  }

  interface PaletteOptions {
    misc: MiscColors
  }

  interface MiscColors {
    greyish: string
    greydark: string
    dark: string
    lightgrey: string
    purple: string
    white: string
  }
}

const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      subfullhd: 1800,
      fullhd: 1920,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: '2em',
          fontFamily: 'Poppins',
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'success' && {
              color: 'white',
            }),
        }),
      },
    },
  },
  palette: {
    primary: {
      light: '#f5f5f5',
      main: grey[900],
      dark: grey[900],
    },
    misc: {
      greyish: '#666666',
      greydark: '#333333',
      dark: grey[900], // Non-variable unlike primary
      lightgrey: '#eeeeee',
      purple: '#9f7beb',
      white: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
    success: {
      main: '#6BCA81',
    },
  },
  typography: {
    button: {
      fontFamily: 'Poppins',
    },
    h1: {
      fontFamily: 'Poppins',
    },
    h2: {
      fontFamily: 'Poppins',
    },
    h3: {
      fontFamily: 'Poppins',
    },
    h4: {
      fontFamily: 'Poppins',
    },
    h5: {
      fontFamily: 'Poppins',
    },
  },
})

export const SiteTheme = responsiveFontSizes(Theme, {
  breakpoints: Theme.breakpoints.keys,
  factor: 2,
})
