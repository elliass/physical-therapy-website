import React from 'react'
import { makeStyles } from "@material-ui/core"
import '@fontsource/roboto';
import Typography from "@material-ui/core/Typography";
import List from "./List"
import '../styles/global.css'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#191919',
        padding: '200px 0 150px 0',

        '@media (max-width: 599px)': {
            padding: '100px 0 100px 0',
        },
    },
    beigeWrapper: {
        backgroundColor: '#191919',
        // height: '200px',
        display: 'flex',
        margin: 'auto auto',
    },
    header: {
        maxWidth: '1160px',
        margin: '0 auto',
        flexGrow: '1',
        display: 'flex',
        position: 'relative',

        '@media (max-width: 1200px)': {
            maxWidth: '90%',
        },
        '@media (max-width: 959px)': {
          textAlign: 'center',
        },
    },
    title: {
        margin: 'auto 0',
        flexGrow: '1',
        color: 'white',
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}))

export default function Process() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.beigeWrapper}>
                <div className={classes.header}>
                    <Typography className={classes.title} variant="h3" component="h2" color="contrastText">COMMENT CELA SE PASSE ?</Typography>
                </div>
            </div>
            <div className={classes.darkWrapper}>
                <List />
            </div>
        </div>
    )
}