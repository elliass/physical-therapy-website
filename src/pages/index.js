import React from "react"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
// import { deepPurple } from "@material-ui/core/colors"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Treatments from "../components/Treatments"
import Process from "../components/Process"
import Faq from "../components/Faq"

const theme = createTheme({
  palette: {
    primary: {
      main: '#F2E2CD'
    },
    secondary: {
      main: '#820FF0'
    },
  },
  typography: {
    h2: {
      fontWeight: 700,
      fontSize: "4rem",
      letterSpacing: '0.05em'
    },
    h3: {
      fontWeight: 700,
      fontSize: "3rem",
      letterSpacing: '0.05em'
    },
    body1: {
      letterSpacing: '0.09em'
    }
  },
  overrides: {
    MuiGridList: {
      root: {
        margin: '0',
      },
    },
  },
})

export default function Home() {
  return <div>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Services />
      <Treatments />
      <Process />
      <Faq />
    </ThemeProvider>
    </div>
}
