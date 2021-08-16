import React from 'react'
import { makeStyles } from "@material-ui/core"
import Typography from "@material-ui/core/Typography";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';

const questions = [
    {
        id: 1,
        title: 'Notre kinésithérapeute est-il conventionné ?',
        answer: 'Oui, nous sommes bien adhérés à la convention entre les kinésithérapeutes et les organismes assureurs.',
    },
    {
        id: 2,
        title: 'Notre kinésithérapeute applique-t-il le tiers-payant ?',
        answer: 'Oui, nous laissons le choix au patient s’il souhaite bénéficier du tiers-payant ou non.',
    },
    {
        id: 3,
        title: 'Dans quelles régions excerce notre kinésithérapeute ?',
        answer: 'Nous excerçons dans la région de Charleroi et ses alentours (Jumet, Gilly, Montignies sur Sambre, Marchienne... Mais aussi dans la région de Fontaine L’Evêque.',
    },
    {
        id: 4,
        title: 'De quoi avez-vous besoin lors de la première séance ?',
        answer: 'Pour la première séance vous devrez simplement préparer votre préscription médicale ainsi qu’une vignette de votre mutuelle.',
    },
]

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#191919',
        // height: '150vh',
        position: 'relative',
        padding: '150px 0',

        '@media (max-width: 1200px)': {
            // height: '170vh',
        },
    },
    wrapper: {
        maxWidth: '1160px',
        margin: '0 auto',
        color: '#fff',

        '@media (max-width: 1200px)': {
            maxWidth: '90%'
        },
        '@media (max-width: 959px)': {
          textAlign: 'center',
        },
    },
    title: {
        // paddingTop: '150px',
    },
    heading: {
        '@media (max-width: 959px)': {
            fontSize: '1.2rem'
        },
        '@media (max-width: 599px)': {
            fontSize: '1rem',
            textAlign: 'left',
        },
        
    },
    circle: {
        backgroundColor: 'white',
        opacity: '.05',
        position: 'absolute',
        top:'0',
        left: '0',
        height: '800px',
        width: '800px',
        borderRadius: '50%',
        marginLeft: '-20em'
    },
    accordion:{
        marginTop: '150px',
        '& .MuiAccordion-root:before': {
            backgroundColor: '#FFF',
            display: 'none',
        },
        '& .MuiAccordion-root:after': {
            backgroundColor: '#FFF',
            bottom: '-1px',
            left: '0',
            right: '0',
            height: '2px',
            content: '""',
            opacity: '1',
            position: 'absolute',

            '@media (max-width: 599px)': {
                maxWidth: '90%',
                margin: '0 auto'
            },
        },
        '& .MuiAccordion-root:first-child': {
            borderTop: '0px'
        },

        '@media (max-width: 959px)': {
            maxWidth: '700px',
            margin: 'auto auto',
            marginTop: '100px',
        },

        '@media (max-width: 599px)': {
            marginTop: '50px',
        },
    },
    accordionItem: {
        backgroundColor: 'transparent',
        color: '#FFF',
        padding: '30px',
        borderWidth: '0',
        '& .MuiAccordionSummary-content': {
            order: '2',
        },
        '& .MuiIconButton-root': {
            order: '1',
            margin: '0',
            color: theme.palette.secondary.main,
        },
        '& .MuiSvgIcon-root': {
            fontSize: '1.5em',
        },

        '@media (max-width: 959px)': {
            padding: '30px 0px',
        },
    }
}))
export default function Faq() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <Typography className={classes.title} variant="h3" component="h2">QUESTIONS FREQUEMMENT POSEES</Typography>
                <div className={classes.circle}></div>

                <div className={classes.accordion}>
                    {questions.map((question) => (
                        <Accordion className={classes.accordionItem} key={question.id} elevation={0}>
                            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography className={classes.heading} variant="h5">{question.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{question.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    )
}
