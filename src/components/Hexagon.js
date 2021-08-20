import React from 'react'
import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    hexagon: {
        position: 'relative',
        width: '100px',
        height: '57.74px',
        backgroundColor: '#F2E2CD',
        // margin: '86.60px 0',
    },
    before: {
        // content: "",
        // position: 'absolute', 
        width: '0',
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        // bottom: '100%',
        borderBottom: '28.87px solid #F2E2CD',
        // borderColor: theme.palette.primary.main,
    },
    after: {
        width: '0',
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        // top: '100%',
        borderTop: '28.87px solid #F2E2CD',
        // borderColor: theme.palette.primary.main,
    }
}))

export default function Hexagon() {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.before} ></div>
            <div className={classes.hexagon} ></div>
            <div className={classes.after} ></div>
        </div>
    )
}
