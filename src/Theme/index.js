import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors'

export const nav = createTheme({
    palette: {
        primary: {
            main: grey[500]
        }
    }
})

export const lightTheme = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff"
    }
  },
});

