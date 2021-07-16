import React from 'react'
import { makeStyles } from "@material-ui/core"
import '@fontsource/roboto'
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Frame from "./Frame"

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        margin: 'auto 0',
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
        position: 'relative'
    },
    titleRight: {
        // border: 'solid 1px black',
        textAlign: 'right',
        padding: '1em 0 .5em 0'
    },
    titleLeft: {
        textAlign: 'left',
        padding: '1em 0 .5em 0'
    },
    descriptionRight: {
        // border: 'solid 1px black',
        padding: '2em 4em 4em 0',
    },
    descriptionLeft: {
        // border: 'solid 1px black',
        padding: '2em 0 4em 4em',
    },
    image: {
        // border: 'solid 1px gray',
        height: '400px',
        width: '100%',
        maxWidth: '100%',
    }
}))

export default function Service( { service }) {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            {service.id % 2 !== 0 ? 
            <Grid className={classes.grid} container> 
                <Grid className={classes.gridLeft} item md={5}>
                    <img  className={classes.image} src={service.image} alt="site banner" />
                </Grid>

                <Grid item md={2}>
                    <div></div>
                </Grid>

                <Grid className={classes.gridRight} item md={5}>
                    <Frame position='right'/>
                    <Typography className={classes.titleRight} variant="h3" component="h2">{service.title}</Typography>
                    <Typography className={classes.descriptionRight} variant="body1">{service.description}</Typography>
                </Grid>
            </Grid>
            :
            <Grid className={classes.grid} container> 
                <Grid className={classes.gridRight} item md={5}>
                    <Frame position='left'/>
                    <Typography className={classes.titleLeft} variant="h3" component="h2">{service.title}</Typography>
                    <Typography className={classes.descriptionLeft} variant="body1">{service.description}</Typography>
                </Grid>

                <Grid item md={2}>
                    <div></div>
                </Grid>

                <Grid className={classes.gridLeft} item md={5}>
                    <img  className={classes.image} src={service.image} alt="site banner" />
                </Grid>
            </Grid>
            }
        </div>
    )
}
