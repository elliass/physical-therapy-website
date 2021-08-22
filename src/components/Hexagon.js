import React from 'react'
import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    container: {
        position: 'absolute',
        top: props => props.top,
        left: props => props.left,
    },
    hexagon: {
        width: '100px',
        height: '57.74px',
        backgroundColor: props => props.color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', 
        margin: 'auto 0',
    },
    before: {
        width: '0',
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        borderBottom: '28.87px solid',
        borderBottomColor: props => props.color,
    },
    after: {
        width: '0',
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        borderTop: '28.87px solid',
        borderTopColor: props => props.color,
    },
    icon: {
        width: '50%',
    }

}))

export default function Hexagon( { children, ...props } ) {
    const classes = useStyles(props)

    return (
        <div className={classes.container} >
            <div className={classes.before} ></div>
            <div className={classes.hexagon} > 
                <img className={classes.icon} src={ props.icon } alt= { props.alt } />
                { children }
            </div>
            <div className={classes.after} ></div>
        </div>
    )
}
