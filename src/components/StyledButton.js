import React from 'react'
import { makeStyles } from "@material-ui/core"
import Button from '@material-ui/core/Button'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles((theme) => ({
    btn: {
        padding: '.8em 2em', 
        backgroundColor: '${({ primary }) => (primary ? "red" : "green")}',
        '&:hover': {
            backgroundColor: 'white',
            color: theme.palette.secondary.main,
        },

        '@media (max-width: 480px)': {
            fontSize: '11px'
        },
    }
    
}))

export default function StyledButton( { children, icon, number, inputType } ) {
    const classes = useStyles()

    return (
        <div>
            <Button 
                className={classes.btn} 
                variant="contained" 
                color="secondary" 
                size="small" 
                disableElevation
                endIcon={ icon }
                href={ number }
                type={ inputType }
            >
                { children }
            </Button>
        </div>
    )
}
