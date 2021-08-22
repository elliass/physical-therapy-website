import React from 'react'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    right: {
        position: 'absolute',
        height: '20px',
        width: '100px',
        backgroundColor: theme.palette.secondary.main,
        top: '0',
        right: '0',
    },
    left: {
        position: 'absolute',
        height: '20px',
        width: '100px',
        backgroundColor: theme.palette.secondary.main,
        top: '0',
        left: '0',
    }
}))

export default function Frame({ position }) {
    const classes= useStyles()

    return (
        <div>
        {position === 'left' ? <div className={classes.left}></div> : <div className={classes.right}></div>}
        </div>
    )
}
