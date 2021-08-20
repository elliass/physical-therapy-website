import React from 'react'
import { makeStyles } from "@material-ui/core"
import '@fontsource/roboto';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import StyledButton from "./StyledButton" 

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '200px 0',

        '@media (max-width: 599px)': {
            padding: '100px 0',
        },
    },
    wrapper: {
        maxWidth: '1160px',
        margin: '0 auto',

        '@media (max-width: 1200px)': {
            maxWidth: '90%'
        },
        '@media (max-width: 959px)': {
            textAlign: 'center',
          },  
    },
    contact: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'space-between',

        '@media (max-width: 959px)': {
            flexDirection: 'column',
            margin: 'auto 0',
            alignItems: 'center'
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
            maxWidth: '70%',
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
        left: '-50px',
        opacity: '.2',
        maxWidth: '48%',

        '@media (max-width: 1200px)': {
            maxWidth: '60%',
            left: '0px'
        },
        '@media (max-width: 959px)': {
            display: 'none'
        },
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
                    <form className={classes.form} name="contact" method="POST" data-netlify="true" autoComplete="off">
                        <Typography className={classes.title} variant="h3" component="h2">ENCORE DES QUESTIONS ?</Typography>
                        <Typography className={classes.description} variant='body1'>N'hésitez pas à nous en faire part, notre spécialiste est là pour vous conseiller.</Typography>
                        
                        <input type="hidden" name="form-name" value="contact" />
                        <TextField className={classes.first} label="First Name" type="text" name="firstname" color="secondary" autoComplete="none" variant="outlined"/>
                        <TextField className={classes.last} label="Last Name" type="text" name="lastname" color="secondary" autoComplete="none" variant="outlined"/>
                        <TextField label="Email" type="email" name="email" color="secondary" fullWidth autoComplete="none" variant="outlined"/>
                        <TextField label="Message" type="text" name="message" color="secondary" fullWidth multiline rows={5} autoComplete="none" variant="outlined"/>
                        <StyledButton icon={<ArrowForwardIosIcon />} variant="contained" inputType="submit">Submit</StyledButton>                    </form>
                </div>
            </div>
        </div>
    )
}
