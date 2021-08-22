import React from 'react'
import { makeStyles } from "@material-ui/core"
import '@fontsource/roboto'
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Frame from "./Frame"

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        margin: 'auto 0',
        padding: '200px 0',

        '@media (max-width: 959px)': {
            padding: '0px 0',
        },
    },
    grid: {
        height: '100%',
        margin: 'auto 0',

        '@media (max-width: 959px)': {
            display: 'flex',
            margin: '6em 0'
        }
    },
    gridLeft: {
        textAlign: 'right',

        '@media (max-width: 959px)': {
            textAlign: 'center',
            order: '2',
            height: '50%'
        }
    },
    gridRight: {
        position: 'relative',

        '@media (max-width: 959px)': {
            order: '1',
            height: '50%'
        }
    },
    titleRight: {
        textAlign: 'left',
        padding: '1em 0 .5em 0',

        '@media (max-width: 959px)': {
            textAlign: 'center',
            paddingTop: '2em'
        },
    },
    titleLeft: {
        textAlign: 'left',
        padding: '1em 0 .5em 0',

        '@media (max-width: 959px)': {
            textAlign: 'center',
            paddingTop: '2em'
        },
    },
    description: {
        padding: '2em 0em 4em 0',
        textAlign: 'justify',

        '@media (max-width: 959px)': {
            maxWidth: '400px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
    image: {
        height: '400px',
        width: '100%',
        maxWidth: '100%',

        '@media (max-width: 959px)': {
            maxWidth: '45%',
            margin: '0 auto',
            height: '100%',
        },
        '@media (max-width: 599px)': {
            maxWidth: '70%',
        },
        '@media (max-width: 480px)': {
            maxWidth: '80%'
        },
    }
}))

export default function Service( { service }) {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            {service.id % 2 !== 0 ? 
            <Grid className={classes.grid} container> 
                <Grid className={classes.gridLeft} item lg={5} md={5} sm={12} xs={12}>
                    <img  className={classes.image} src={service.image} alt="site banner" />
                </Grid>

                <Grid item lg={2} md={2} sm={0} xs={0}>
                    <div></div>
                </Grid>

                <Grid className={classes.gridRight} item lg={5} md={5} sm={12} xs={12}>
                    <Frame position='right'/>
                    <Typography className={classes.titleRight} variant="h3" component="h2">{service.title}</Typography>
                    <Typography className={classes.description} variant="body1">{service.description}</Typography>
                </Grid>
            </Grid>
            :
            <Grid className={classes.grid} container> 
                <Grid className={classes.gridRight} item lg={5} md={5} sm={12} xs={12}>
                    <Frame position='left'/>
                    <Typography className={classes.titleLeft} variant="h3" component="h2">{service.title}</Typography>
                    <Typography className={classes.description} variant="body1">{service.description}</Typography>
                </Grid>

                <Grid item lg={2} md={2} sm={0} xs={0}>
                    <div></div>
                </Grid>

                <Grid className={classes.gridLeft} item lg={5} md={5} sm={12} xs={12}>
                    <img  className={classes.image} src={service.image} alt="site banner" />
                </Grid>
            </Grid>
            }
        </div>
    )
}
