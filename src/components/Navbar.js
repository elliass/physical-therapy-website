import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import '../styles/global.css'
import IconButton from '@material-ui/core/IconButton'

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
        maxWidth: '1160px',
        margin: '0 auto',
        padding: '0',

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
    menu: {
        width: '20px',
        height: '20px',
        backgroundColor: 'white',
        display: 'none',
    },
    cta: {
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        fontSize: '2.5rem',

        '&:hover': {
            WebkitTransform: 'scale(1.3)',
            MsTransform: 'scale(1.3)',
            transform: 'scale(1.3)',
        },
    },
    sitckyCta: {
        position: 'fixed',
        top: '500px',
        zIndex: '100',
        padding: '0px',
    },
    stickyIcon: {
        fontSize: '3rem',
        opacity: '.5',
        color: '#191919',
        
        '&:hover': {
            opacity: '1',
        },
    }
}))

export default function Navbar() {
    const classes = useStyles()

    const [visible, setVisible] = useState(false)

    const handleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if ( scrolled > 50) {
            setVisible(true)
        } 
        else {
            setVisible(false)
        }
    }

    const isBrowser = () => typeof window !== "undefined"

    const handleScroll = () => {
        window.scrollTo({ 
            top: document.documentElement.scrollHeight, 
            behavior: 'auto'
        }); 
    }
    
    isBrowser() && window.addEventListener('scroll', handleVisible); 

    return (
        <div className={classes.container}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.logo} variant="h6">
                    COMPANY
                    </Typography>
                    <div className={classes.navlink}>
                        <IconButton className={classes.cta} aria-label="call us" color="secondary" href="tel:0483387762">
                            <WhatsAppIcon className={classes.icon} color="secondary" fontSize="large"/>
                        </IconButton>

                        {visible && 
                        <IconButton className={classes.sitckyCta} aria-label="call us" color="secondary" href="tel:0483387762" onScroll={handleScroll}>
                            <WhatsAppIcon className={classes.stickyIcon} color="secondary" fontSize="large"/>
                        </IconButton>
                        }
                        
                    </div>
                    <div className={classes.menu}></div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
