import React from 'react'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    before: {
        position: 'absolute',
        height: '20px',
        width: '100px',
        backgroundColor: theme.palette.secondary.main,
        top: '195px',
        right: '0',
    }
}))

export default function Frame() {
    const classes= useStyles()

    return (
        <div className={classes.before}></div>
    )
}
