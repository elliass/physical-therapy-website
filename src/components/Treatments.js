import React from 'react'
import { makeStyles } from "@material-ui/core"
import '@fontsource/roboto'
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { BorderColor } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#191919',
    },
    lightContainer: {
        backgroundColor: 'white',
        opacity: '.05',
        width: '100%',
        height: '100px',

        '@media (max-width: 959px)': {
            height: '75px',
        },
    },
    beigeContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '200px',

        '@media (max-width: 959px)': {
            height: '150px',
        },
    },
    titleContainer: {
        display: 'flex',
        maxWidth: '1160px',
        height: '100%',
        margin: '0 auto',

        '@media (max-width: 1200px)': {
            maxWidth: '960px',
        },
        '@media (max-width: 959px)': {
            maxWidth: '728px',
            textAlign: 'center',
        },
    },
    title: {
        margin: 'auto 0',
        flexGrow: '1',
    },
    blueContainer:{
        maxWidth: '1160px',
        width: '100%',
        padding: '100px 0',
        // transform: 'translate(-50%, 0)',
        display: 'flex',
        margin: '0 auto',
    },
    grayContainer:{
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    image: {
        width: '100%',
        maxWidth: '100%',
        maxHeight: '300px',
        margin: 'auto 0',
        border: 'solid 1px',
        borderColor: 'white'
    },
    grid: {
        maxWidth: '80%',
        margin: 'auto auto',

        '@media (max-width: 1200px)': {
            maxWidth: '60%',
        },
        '@media (max-width: 599px)': {
            maxWidth: '40%',
        },
        '@media (max-width: 480px)': {
            maxWidth: '60%'
        },
    },
    bottomContainer: {
        backgroundColor: 'white',
        opacity: '.01',
        width: '100%',
        height: '150px',
    },
}))

export default function Treatments() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.lightContainer}></div>
            <div className={classes.beigeContainer}>
                <div className={classes.titleContainer}>
                    <Typography className={classes.title} variant="h3" component="h2">NOS SPECIALISATIONS</Typography>
                </div>
            </div>
            <div className={classes.blueContainer}>
                <div className={classes.grayContainer}>
                    <Grid className={classes.grid} container spacing={3}>
                        <Grid className={classes.gridItem} item lg={4} md={4} sm={6} xs={12}>
                            <img className={classes.image} src='/t1.svg' alt="site banner" />
                        </Grid>
                        <Grid className={classes.gridItem} item lg={4} md={4} sm={6} xs={12}>
                            <img className={classes.image} src='/t2.svg' alt="site banner" />
                        </Grid>
                        <Grid className={classes.gridItem} item lg={4} md={4} sm={6} xs={12}>
                            <img className={classes.image} src='/t3.svg' alt="site banner" />
                        </Grid>
                        <Grid className={classes.gridItem} item lg={4} md={4} sm={6} xs={12}>
                            <img className={classes.image} src='/t4.svg' alt="site banner" />
                        </Grid>
                        <Grid className={classes.gridItem} item lg={4} md={4} sm={6} xs={12}>
                            <img className={classes.image} src='/t5.svg' alt="site banner" />
                        </Grid>
                        <Grid className={classes.gridItem} item lg={4} md={4} sm={6} xs={12}>
                            <img className={classes.image} src='/t6.svg' alt="site banner" />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className={classes.bottomContainer}></div>
        </div>
    )
}
