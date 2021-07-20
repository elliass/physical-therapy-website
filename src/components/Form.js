import React from 'react'
import { makeStyles } from "@material-ui/core"
import '@fontsource/roboto';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StyledButton from "./StyledButton" 
import { FullscreenExit } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        position: 'relative',
    },
    wrapper: {
        maxWidth: '1160px',
        margin: '150px auto',

        '@media (max-width: 1200px)': {
            maxWidth: '960px',
        },

        '@media (max-width: 959px)': {
            maxWidth: '728px',
            textAlign: 'center',
          },
        
    },
    contact: {
        display: 'flex',
        justifyContent: 'space-between',

        '@media (max-width: 959px)': {
            flexDirection: 'column'
        },
    },
    form: {
        maxWidth: '55%',
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(2)
        },
        '& > .name': {
            margin: theme.spacing(1),
        },

        '@media (max-width: 959px)': {
            maxWidth: '100%',
        },
    },
    image: {
        margin: 'auto 0',
        height: '400px',
        width: '100%',
        maxWidth: '40%',

        '@media (max-width: 959px)': {
            display: 'none'
        },
    },
    img: {
        position: 'absolute',
        zIndex: '-10',
        bottom: '0',
        left: '0',
        opacity: '.7',

        '@media (max-width: 1200px)': {
            maxWidth: '40%',
        },

        '@media (max-width: 959px)': {
            display: 'none'
        },
    },
    title: {
        // padding: '1em 0'
    },
    description: {
        margin: '30px 0', 
    },
    first: {
        width: '48.6%',
        marginRight: theme.spacing(2),

        '@media (max-width: 1200px)': {
            width: '100%',
        },
    },
    last: {
        width: '48.6%',

        '@media (max-width: 1200px)': {
            width: '100%',
        },
    },
}))

export default function Form() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.contact}>
                    <div className={classes.image}>
                        <img className={classes.img} src='/mailbox.svg' alt='mailbox image' />
                    </div>
                    <form className={classes.form} noValidate autoComplete="off">
                        <Typography className={classes.title} variant="h3" component="h2">ENCORE DES QUESTIONS ?</Typography>
                        <Typography className={classes.description} variant='body1'>N'hésitez pas à nous en faire part, notre spécialiste est là pour vous conseiller.</Typography>
                        <TextField className={classes.first} label="First Name" autoComplete="none" variant="outlined"/>
                        <TextField className={classes.last} label="Last Name" autoComplete="none" variant="outlined"/>
                        <TextField label="Email" fullWidth autoComplete="none" variant="outlined"/>
                        <TextField label="Message" fullWidth multiline rows={5} autoComplete="none" variant="outlined"/>
                        {/* <Button className={classes.btn} type="submit" variant="contained" color="secondary" endIcon={<ArrowForwardIosIcon />}>Submit</Button> */}
                        <StyledButton>Submit</StyledButton>
                    </form>
                </div>
            </div>
        </div>
    )
}
