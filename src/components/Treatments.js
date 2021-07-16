import React from 'react'
import { makeStyles } from "@material-ui/core"
import '@fontsource/roboto'
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#191919',
        height: '150vh',
        position: 'relative',
    },
    whiteContainer: {
        backgroundColor: 'white',
        position: 'absolute',
        content: '',
        width: '50%',
        height: '400px',
        top: '0',
        left: '0',
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
    },

    titleContainer: {
        display: 'flex',
        maxWidth: '1160px',
        height: '100%',
        margin: '0 auto',
    },
    title: {
        margin: 'auto 0',
    },
    blueContainer:{
        display: 'flex',
        position: 'absolute',
        top: '350px',
        right: '8em',
        maxWidth: '1160px',
        width: '100%',
        height: '100%',
        // margin: '0 auto',
    },
    grayContainer:{
        // backgroundColor: 'gray',
        // opacity: '.02',
        width: '100%',
        height: '700px',
        // margin: 'auto 0',
        display: 'flex',
        // border: 'solid 1px red'

    },
    image: {
        // border: 'solid 1px gray',
        // height: '400px',
        width: '100%',
        maxWidth: '100%',
        margin: 'auto 0',
        border: 'solid 1px red'
    },
    grid: {
        maxHeight: '300px',
        // border: 'solid 1px red'
    }
}))

export default function Treatments() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.whiteContainer}></div>
            <div className={classes.lightContainer}></div>
            <div className={classes.beigeContainer}>
                <div className={classes.titleContainer}>
                    <Typography className={classes.title} variant="h3" component="h2">Nos spécialisations</Typography>
                </div>
            </div>
            <div className={classes.blueContainer}>
                <div className={classes.grayContainer}>
                    {/* <img className={classes.image} src='/treatment1.svg' alt="site banner" /> */}
                    <Grid className={classes.grid} container spacing={3}>
                        <Grid className={classes.grid} item md={4}>
                            <img className={classes.image} src='/test.svg' alt="site banner" />
                        </Grid>
                        <Grid className={classes.grid} item md={4}>
                            <img className={classes.image} src='/test.svg' alt="site banner" />
                        </Grid>
                        <Grid className={classes.grid} item md={4}>
                            <img className={classes.image} src='/test.svg' alt="site banner" />
                        </Grid>
                        <Grid className={classes.grid} item md={4}>
                            <img className={classes.image} src='/test.svg' alt="site banner" />
                        </Grid>
                        <Grid className={classes.grid} item md={4}>
                            <img className={classes.image} src='/test.svg' alt="site banner" />
                        </Grid>
                        <Grid className={classes.grid} item md={4}>
                            <img className={classes.image} src='/test.svg' alt="site banner" />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className={classes.bottomContainer}></div>
        </div>
    )
}
