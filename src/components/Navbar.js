import React from 'react'
import { makeStyles } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import '../styles/global.css'
import StyledButton from "./StyledButton" 

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
    },
    logo: {
        flexGrow: '1',
        fontSize: '14px',
        fontWeight: 'bold'
    },
    btn: {
        marginRight: '40px',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
        },
    },
    btnPrimary: {
        padding: '10px',
        '&:hover': {
            backgroundColor: 'white',
            color: theme.palette.secondary.main,
        },
    }
    
}))

export default function Navbar() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.logo} variant="h6">
                    COMPANY
                    </Typography>
                    <Button className={classes.btn} variant="text" size='small'>Home</Button>
                    <Button className={classes.btn} variant="text" size="small">Services</Button>
                    <Button className={classes.btn} variant="text" size="small">Contact</Button>
                    <StyledButton>Prendre RDV</StyledButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
