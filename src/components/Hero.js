import React from 'react'
import { makeStyles } from "@material-ui/core"
import '@fontsource/roboto'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Hexagon from "./Hexagon"
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import StyledButton from './StyledButton'


const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: theme.palette.primary.main,
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
    display: 'flex',
    margin: 'auto auto',
    height: '400px',
    position: 'relative',
    
    '@media (max-width: 959px)': {
      display: 'none',
    }
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
  hexagons: {
    position: 'relative',
    margin: 'auto auto',
    height: '400px',
    width: '400px',
  },
  downIcon: {
    fontSize: '4rem',

    '&:hover': {
        WebkitTransform: 'scale(1.3)',
        MsTransform: 'scale(1.3)',
        transform: 'scale(1.3)',
    },
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
                    number="tel:0483387762"
                    variant="contained"
                  >
                    Prendre Rendez-Vous
                  </StyledButton>
                </Grid>
                <Grid className={classes.gridRight} item lg={6} md={6} sm={0} xs={0}>
                  <div className={classes.hexagons}>
                    <Hexagon top="0px" left="0px" color="#F2E2CD" icon="/hero/broken-bone.svg" />
                    <Hexagon top="0px" left="120px" color="#820FF0" icon="/hero/heart.svg" />
                    <Hexagon top="0px" left="240px" color="#F2E2CD" icon=""/>

                    <Hexagon top="100px" left="60px" color="white" icon="/hero/broken-neck.svg"/>
                    <Hexagon top="100px" left="180px" color="#F2E2CD" icon="" />
                    <Hexagon top="100px" left="300px" color="#820FF0" icon="/hero/hospital.svg"/>

                    <Hexagon top="200px" left="120px" color="#191919" icon="/hero/dumbbell.svg" />
                    <Hexagon top="200px" left="240px" color="#F2E2CD" icon="" />

                    <Hexagon top="300px" left="180px" color="white" icon="" >
                      <IconButton className={classes.downBtn} aria-label="go to next" color="secondary" href="#services">
                          <ExpandMoreIcon className={classes.downIcon} color="secondary" fontSize="large"/>
                      </IconButton>
                    </Hexagon>
                  </div>
                </Grid>
            </Grid>
        </div>
    )
}
