import React from 'react'
import { makeStyles } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import '../styles/global.css'
import StyledButton from "./StyledButton" 

const queries = {
    desktop: '(max-width: 1200px)',
    laptop: '(max-width: 1024px)',
    tablet: '(max-width: 768px)',
    phone: '(max-width: 480px)'
}

const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: '1',
        // backgroundColor: theme.palette.primary.main,
    },
    appbar: {
        display: 'block',
        position: 'static'
    },
    toolbar: {
        margin: '0 auto',
        padding: '0',
        maxWidth: '1160px',

        '@media (max-width: 1200px)': {
            maxWidth: '960px',
        },
        '@media (max-width: 959px)': {
            maxWidth: '728px',
        },
        '@media (max-width: 599px)': {
            maxWidth: '440px',
        },
        '@media (max-width: 576px)': {
            maxWidth: '100%'
        }
        
    },
    logo: {
        flexGrow: '1',
        fontSize: '17px',
    },
    navlink: {
        display: 'flex',

        '@media (max-width: 599px)': {
            maxWidth: '440px',
            display: 'none',
            flexDirection: 'column',
        }
    },
    btn: {
        marginRight: '40px',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
        },

        '@media (max-width: 599px)': {
            margin: '0',
        }
    },
    btnPrimary: {
        padding: '10px',
        '&:hover': {
            backgroundColor: 'white',
            color: theme.palette.secondary.main,
        },
    },  
    menu: {
        width: '20px',
        height: '20px',
        backgroundColor: 'white',
        display: 'none',

        '@media (max-width: 599px)': {
            display: 'block',
        }
    }  
}))
// from 576px background is breaking

export default function Navbar() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.logo} variant="h6">
                    COMPANY
                    </Typography>
                    <div className={classes.navlink}>
                        <Button className={classes.btn} id='navlink' variant="text" size='small'>Home</Button>
                        <Button className={classes.btn} id='navlink' variant="text" size="small">Services</Button>
                        <Button className={classes.btn} id='navlink' variant="text" size="small">Contact</Button>
                        <StyledButton>Prendre RDV</StyledButton>
                    </div>
                    <div className={classes.menu}></div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
