import React from 'react'
import { makeStyles } from "@material-ui/core"
import '@fontsource/roboto';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import StyledButton from "./StyledButton" 


const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: 'theme.palette.primary.dark',
    height: 'calc(100vh - 50px)',
  },
  grid: {
    maxWidth: '1160px',
    margin: '0 auto',
    height: '100%',
    maxHeight: '90vh',

    '@media (max-width: 1200px)': {
      maxWidth: '90%'
    },
    '@media (max-width: 959px)': {
      textAlign: 'center',
    },
  },
  gridLeft: {
    margin: 'auto 0',
  },
  gridRight: {
    margin: 'auto 0',
    textAlign: 'right',
  },
  title: {
    paddingBottom: '50px',

    '@media (max-width: 1200px)': {
      fontSize: '3rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '2.5rem',
    },
  },
  span: {
    '@media (max-width: 390px)': {
      display: 'none'
    },
  },
  paragraph: {
    padding: '0 10em 4em 0',

    '@media (max-width: 1200px)': {
      padding: '0 0 4em 0',
      margin: '0',
      maxWidth: '400px',
      textAlign: 'justify',
    },
    '@media (max-width: 959px)': {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
  },
  btn: {
    padding: '.8em 2em', 
  },
  image: {
    maxWidth: '100%',

    '@media (max-width: 1200px)': {
      maxWidth: '80%',
    },
    '@media (max-width: 959px)': {
      display: 'none',
    }
  }
}))

export default function Hero() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Grid className={classes.grid} container> 
                <Grid className={classes.gridLeft} item lg={6} md={6} sm={12} xs={12}>
                  <Typography className={classes.title} variant="h2" component="h1">Kinésithérapie <br/> à <span className={classes.span}>votre</span> domicile</Typography>
                  <Container className={classes.paragraph}>
                    <Typography variant="body1">
                    Vous avez besoin de séances de kinésithérapie à domicile ?
                    Notre spécialiste se déplace jusque chez vous pour vous soigner.
                    </Typography>
                  </Container>
                  <StyledButton 
                    icon={<ArrowForwardIosIcon />}
                    number={ "tel:0483387762" }
                  >
                    Prendre Rendez-Vous
                  </StyledButton>
                </Grid>
                <Grid className={classes.gridRight} item lg={6} md={6} sm={0} xs={0}>
                  <img  className={classes.image} src="" alt="" />
                </Grid>
            </Grid>
        </div>
    )
}
