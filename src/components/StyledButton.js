import React from 'react'
import { makeStyles } from "@material-ui/core"
import Button from '@material-ui/core/Button'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles((theme) => ({
    btn: {
        padding: '.8em 2em', 
        backgroundColor: props => props.backgroundColor,
        color: props => props.color,
        '&:hover': {
            backgroundColor: 'white',
            color: theme.palette.secondary.main,
        },

        '@media (max-width: 480px)': {
            fontSize: '11px'
        },
    }
    
}))

export default function StyledButton( { children, ...props } ) {
    const classes = useStyles(props)

    return (
        <div>
            <Button 
                className={classes.btn} 
                variant={ props.variant }
                color="secondary"
                size="small" 
                disableElevation
                endIcon={ props.icon }
                href={ props.number }
                type={ props.inputType }
            >
                { children }
            </Button>
        </div>
    )
}
