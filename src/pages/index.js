import React from "react"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
// import { deepPurple } from "@material-ui/core/colors"
import Navbar from "../components/Navbar"

const theme = createTheme({
  palette: {
    primary: {
      main: '#F2E2CD'
    },
    secondary: {
      main: '#820FF0'
    },
  }
})

export default function Home() {
  return <div>
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
    </div>
}
