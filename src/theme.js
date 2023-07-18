import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#ccc'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#000'
        }
      }
    }
  }
})

export default theme