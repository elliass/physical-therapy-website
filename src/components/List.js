import React from 'react'
import { makeStyles } from "@material-ui/core"
import '@fontsource/roboto';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import StyledButton from "./StyledButton" 
import '../styles/global.css'

const steps = [
    {
        img: '/1.svg',
        icon: '/calendar.svg',
        title: 'On fixe un premier rdv',
        description: 'Nous fixons un rendez-vous en fonction de vos disponibilités afin de vous rencontrer à votre domicile pour effectuer une première séance.',
        last: false,
    },
    {
        img: '/2.svg',
        icon: '/plan.svg',
        title: 'Première séance',
        description: 'Le kiné effectuera un bilan de votre état de santé et établira un programme de prise en charge sur base de la prescription médicale.',
        last: false,
    },
    {
        img: '/3.svg',
        icon: '/heart.svg',
        title: 'On vous accompagne',
        description: 'En plus des soins prodigués, vous pourrez profiter de conseils propres à vos besoins de la part de notre spécialiste tout au long de votre rééducation.',
        last: false,
    },
    {
        img: '/4.svg',
        icon: '/phone.svg',
        title: 'Prendre rendez-vous ?',
        description: 'Contactez-nous !',
        last: true,
    },
];

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '100px',

        '@media (max-width: 599px)': {
            marginTop: '50px',
        },
    },
    list: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        overflowY: 'hidden',

        '&::-webkit-scrollbar': {
            display: 'none',
        },

        '@media (max-width: 599px)': {
            flexDirection: 'column'
        },
    }, 
    listItem: {
        margin: '0 50px',
        marginRight: '25%',
        flex: '0 0 auto',

        '&:first-child': {
            marginLeft: '10%',
        },

        '@media (max-width: 599px)': {
            margin: '0',
            position: 'relative',

            '&:first-child': {
                margin: '0px',
            },
            '&:last-child': {
                margin: '0px',
            },
        },
    },
    cardElement: {
        position: 'relative',

        '@media (max-width: 959px)': {
            margin: '0 auto',
        },
    },
    cardList: {
        backgroundColor: 'white',
        border: '3px solid #C4C4C4',
        borderRadius: '50px',
        padding: '2em 2em',
        height: '300px',
        width: '400px',  
        position: 'absolute',
        top: '0',
        zIndex: '10',

        '@media (max-width: 959px)': {
            left: '50%',
            transform: 'translate(-50%, 0)',
            margin: '0',
            height: '280px',
            width: '350px',
        },
        '@media (max-width: 480px)': {
            height: '350px',
            width: '70%'
        },
    },
    cardOverlay: {
        backgroundColor: 'black',
        border: '3px solid #C4C4C4',
        borderRadius: '50px',
        padding: '2em 2em',
        height: '320px',
        width: '400px',

        '@media (max-width: 959px)': {
            height: '300px',
            width: '350px',
            margin: '40px auto'

        },
        '@media (max-width: 480px)': {
            height: '370px',
            width: '70%'
        },
    },
    description: {
        margin: '30px 0',

        '@media (max-width: 599px)': {
            fontSize: '0.8em'
        },
    },
    icon: {
        padding: '10px',
        marginBottom: '1em',
    },
    image: {
        width: '5em',
        height: '5em',
        opacity: '0.5',
    },
    cardImage: {
        backgroundColor: 'transparent',
        margin: '0em 0em -5em 8em',
        height: '11em',
        width: '400px',
        position: 'relative',
        textAlign: 'right',
        
        '@media (max-width: 599px)': {
            position: 'absolute',
            margin: '0em',
            top: '15%',
            left: '65%',
            zIndex: '100',
            width: 'auto',
            height: 'auto'
        },
    },
    outsideIcon: {
        position: 'absolute',
        top: '60px',
        right: '40px',
        fontSize: '50px',
        color: '#820FF0',

        '@media (max-width: 599px)': {
            display: 'none'
        },
    },
}))
export default function List() {
    const classes = useStyles()
    
    return (
        <div className={classes.container}>
            <div className={classes.list}>
                {steps.map((step) => ( 
                    <div className={classes.listItem}>
                        <Card className={classes.cardImage} elevation={0}>
                            <CardContent>
                                <img className={classes.image} src={step.img} alt={step.title} />
                            </CardContent>
                        </Card>
    
                        <div className={classes.cardElement}>
                            <div className={classes.cardOverlay}></div>
                            <Card className={classes.cardList} elevation={0}>
                                <div className={classes.cardItem}>
                                    <CardContent className={classes.cardContent}>
                                        <img className={classes.icon} src={step.icon} alt={step.title}></img>
                                        <Typography variant="h4" component="h5" gutterBottom>{step.title}</Typography>
                                        <Typography className={classes.description} variant="body1" color="textSecondary">
                                            {step.description}
                                        </Typography>
                                        {step.last && <StyledButton variant="contained">Prendre Rendez-Vous</StyledButton>}
                                    </CardContent>
                                </div>
                                {!step.last &&<DoubleArrowIcon className={classes.outsideIcon}></DoubleArrowIcon>}
                            </Card>        
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
