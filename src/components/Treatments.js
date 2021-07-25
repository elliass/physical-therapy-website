import React from 'react'
import { makeStyles } from "@material-ui/core"
import '@fontsource/roboto'
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { BorderColor } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#191919',
        height: '180vh',
        position: 'relative',

        '@media (max-width: 959px)': {
            height: '210vh',
        },
        '@media (max-width: 599px)': {
            height: '310vh',
        },
        '@media (min-width: 390px) and (max-width: 480px)': {
            height: '350vh',
        },
    },
    whiteContainer: {
        backgroundColor: 'white',
        position: 'absolute',
        content: '',
        width: '50%',
        height: '400px',
        top: '0',
        left: '0',

        '@media (max-width: 959px)': {
            height: '300px',
        },
    },
    lightContainer: {
        backgroundColor: 'white',
        opacity: '.05',
        position: 'absolute',
        content: '',
        width: '50%',
        height: '100px',
        top: '0',
        right: '0',

        '@media (max-width: 959px)': {
            height: '75px',
        },
    },
    beigeContainer: {
        backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        // content: '',
        width: '100%',
        height: '200px',
        top: '100px',
        right: '0',
        // display: 'flex'

        '@media (max-width: 959px)': {
            height: '150px',
            top: '75px',
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
        // backgroundColor: 'blue',
        position: 'absolute',
        top: '400px',
        maxWidth: '1160px',
        width: '100%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        height: 'calc(180vh - 550px)',

        '@media (max-width: 959px)': {
            height: 'calc(210vh - 450px)',
            top: '300px',
        },
        '@media (max-width: 599px)': {
            height: 'calc(310vh - 450px)',
        },
        '@media (min-width: 390px) and (max-width: 480px)': {
            height: 'calc(350vh - 450px)',
        },

        display: 'flex',

    },
    grayContainer:{
        // backgroundColor: 'white',
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        // border: 'solid 1px red'

    },
    image: {
        width: '100%',
        maxWidth: '100%',
        maxHeight: '300px',
        margin: 'auto 0',
        border: 'solid 1px',
        borderColor: theme.palette.primary.main
    },
    grid: {
        maxWidth: '80%',
        margin: 'auto auto',
        // backgroundColor: 'purple',
        // padding: '0 10em',
        // border: 'solid 1px red'

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
        position: 'absolute',
        // content: '',
        width: '100%',
        height: '150px',
        bottom: '0px',
        right: '0',
        // display: 'flex'
    },
}))

export default function Treatments() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.whiteContainer}></div>
            <div className={classes.lightContainer}></div>
            <div className={classes.beigeContainer}>
                <div className={classes.titleContainer}>
                    <Typography className={classes.title} variant="h3" component="h2">NOS SPECIALISATIONS</Typography>
                </div>
            </div>
            <div className={classes.blueContainer}>
                <div className={classes.grayContainer}>
                    {/* <img className={classes.image} src='/treatment1.svg' alt="site banner" /> */}
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
                        {/* ---------------------------------------------------------------- */}
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
