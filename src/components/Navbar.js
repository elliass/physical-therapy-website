import React from 'react'
import { makeStyles } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CallIcon from '@material-ui/icons/Call';
import '../styles/global.css'
import StyledButton from "./StyledButton" 

const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: '1',
    },
    appbar: {
        display: 'block',
        position: 'static',
        backgroundColor: 'white',
    },
    toolbar: {
        margin: '0 auto',
        padding: '0',
        maxWidth: '1160px',

        '@media (max-width: 1200px)': {
            maxWidth: '90%'
        },        
    },
    logo: {
        flexGrow: '1',
        fontSize: '17px',

        '@media (max-width: 599px)': {
            textAlign: 'center'
        }
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
                    <div className={classes.navlink}>
                        <StyledButton 
                            backgroundColor="#FFF" 
                            color="#820FF0" 
                            variant="outlined" 
                            icon={<CallIcon />}
                        >
                            Appelez-nous
                        </StyledButton>
                    </div>
                    <div className={classes.menu}></div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
