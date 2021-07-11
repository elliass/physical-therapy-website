import React from 'react'
import { makeStyles } from "@material-ui/core"
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    btn: {
        padding: '10px',
        backgroundColor: '${({ primary }) => (primary ? "red" : "green")}',
        '&:hover': {
            backgroundColor: 'white',
            color: theme.palette.secondary.main,
        },
    }
    
}))

export default function StyledButton( { children } ) {
    const classes = useStyles()

    return (
        <div>
            <Button 
                className={classes.btn} 
                variant="contained" 
                color="secondary" 
                size="small" 
                disableElevation>
                    { children }
            </Button>
        </div>
    )
}
