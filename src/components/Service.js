import React from 'react';
import { makeStyles } from "@material-ui/core";
import '@fontsource/roboto';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Frame from "./Frame";

const services = [
    {
        id: 1,
        title: 'Pathologies traitées',
        description: 'Une réeducation préventive et/ou curative vous sera proposée. Nous prenons en charge les problèmes orthopédiques (articulaire, musculaire osseux). Ainsi que les pathologies neurologiques et cardio-pulmonaires.',
        last: false,
    },
    {
        id: 2,  
        title: 'Spécialisations',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        last: false,
    },
    {
        id: 3,  
        title: 'En restant chez vous',
        description: 'Notre spécialiste se déplace chez vous pour vous aider à vous remettre de vos douleureuses blessures ou à récupérer après une intervention chirurgicale.',
        last: false,
    }]

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'white',
        height: '100vh',
      },
    subContainer: {
        // border: 'solid 1px black',
        maxWidth: '1160px',
        height: '100%',
        margin: '0 auto',
        position: 'relative'

    },
    grid: {
        height: '100%',
    },
    gridLeft: {
        // border: 'solid 1px black',
        margin: 'auto 0',
        textAlign: 'right',
    },
    gridRight: {
        // border: 'solid 1px black',
        margin: 'auto 0',
    },
    title: {
        // border: 'solid 1px black',
        textAlign: 'right',
        padding: '1em 0 .5em 0'
    },
    paragraph: {
        // border: 'solid 1px black',
        padding: '2em 4em 4em 0',
    },
    image: {
        border: 'solid 1px gray',
        height: '400px',
        width: '100%',
        maxWidth: '100%',
    }
}))

export default function Service() {
    const classes = useStyles()
    let left = null;
    let right = null;
    let counter = 0;

    return (
        <div className={classes.container}>
            {services.map((element) => (
            <div className={classes.subContainer} key={element.id}>
                <Grid className={classes.grid} container> 
                    <Grid className={classes.gridLeft} item md={5}>
                        <div className={classes.image}></div>
                        {/* <img  className={classes.image} src="/injured-banner.svg" alt="site banner" /> */}
                    </Grid>

                    <Grid item md={2}>
                        <div></div>
                    </Grid>

                    <Frame />

                    <Grid className={classes.gridRight} item md={5}>
                        <Typography className={classes.title} variant="h3" component="h2">{element.title}</Typography>
                        <Typography className={classes.paragraph} variant="body1">{element.description}</Typography>
                    </Grid>
                </Grid>
            </div>))}
        </div>
    )
}
