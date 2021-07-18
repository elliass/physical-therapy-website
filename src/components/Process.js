import React from 'react'
import { makeStyles } from "@material-ui/core"
import '@fontsource/roboto';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import image from '../../static/1.svg';
import image2 from '../../static/2.svg';
import image3 from '../../static/3.svg';
import image4 from '../../static/4.svg';
import image5 from '../../static/5.svg';
import image6 from '../../static/6.svg';
import '../styles/global.css'

const tileData = [
    {
        img: image,
        icon: '/calendar.svg',
        title: 'On fixe un premier rdv',
        description: 'Nous fixons un rendez-vous en fonction de vos disponibilités afin de vous rencontrer à votre domicile pour effectuer une première séance.',
        last: false,
    },
    {
        img: image2,
        icon: '/plan.svg',
        title: 'Première séance',
        description: 'Lors de la première séance le kinésithérapeute va effectuer un bilan de votre état de santé et établir un programme de prise en charge sur base de la prescription médicale.',
        last: false,
    },
    {
        img: image3,
        icon: '/heart.svg',
        title: 'On vous accompagne',
        description: 'En plus des soins prodigués, lors de votre rééducation le kinésithérapeute sera disponible pour vous conseiller de la meilleure des manières en fonction de vos besoins.',
        last: false,
    },
    {
        img: image4,
        icon: '/phone.svg',
        title: 'Prendre rendez-vous ?',
        description: 'Contactez-nous !',
        last: true,
    },
];

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#191919',
        height: '130vh',
    },
    beigeWrapper: {
        backgroundColor: theme.palette.primary.main,
        height: '500px',
    },
    header: {
        maxWidth: '1160px',
        height: '300px',
        margin: '0 auto',
        display: 'flex',
        position: 'relative'
    },
    title: {
        margin: 'auto 0',
    },
    darkWrapper: {
        height: '100%',
    },
    gridContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        height: '100vh',
        marginTop: '-20em',
    },
    root: {
        flexWrap: 'nowrap',
        // transform: 'translateZ(0)',
        margin: '0',
        maxHeight: '100%',
    },
    gridListTile: {
        marginLeft: '10em',
        height: '100%',
    },
    cardElement: {
        // backgroundColor: 'gray',
        height: '100%',
        position: 'relative'
    },
    cardList: {
        backgroundColor: 'white',
        border: '3px solid #C4C4C4',
        borderRadius: '50px',
        margin: '0em 3em',
        padding: '2em 2em',
        height: '300px',
        width: '400px',
        marginRight: '2em',
        position: 'absolute',
        zIndex: '100',
    },
    cardOverlay: {
        backgroundColor: 'black',
        border: '3px solid #C4C4C4',
        borderRadius: '50px',
        margin: '0em 3em',
        padding: '2em 2em',
        height: '320px',
        width: '400px',
        marginRight: '2em',
        position: 'absolute',
        top: '0',
        zIndex: '0',
    },
    cardItem: {
        // border: '3px solid #C4C4C4',
        // borderRadius: '50px',
    },
    paragraph: {
        marginTop: '30px',
        // maxWidth: '20em',
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        padding: '10px',
        marginBottom: '1em',
    },
    image: {
        width: '5em',
        height: '5em',
        opacity: '0.5'
    },
    cardImage: {
        backgroundColor: 'transparent',
        margin: '0em 0em -5em 8em',
        height: '11em',
        width: '31em',
        position: 'relative',
        textAlign: 'right'
    },
    btn: {
        marginTop: '2em'
    },
    outsideIcon: {
        position: 'absolute',
        top: '30px',
        right: '60px',
        fontSize: '100px',
        color: '#C4C4C4',
        // opacity: '.1'
    },
}))

export default function Process() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.beigeWrapper}>
                <div className={classes.header}>
                    <Typography className={classes.title} variant="h3" component="h2" color="contrastText">COMMENT CELA SE PASSE ?</Typography>
                </div>
            </div>
            <div className={classes.darkWrapper}>
                <div className={classes.gridContainer}>
                    <GridList className={classes.root} cols={2} spacing={100} style={ { margin: '0', height:'100%'}}>
                        {tileData.map((tile) => (
                            <GridListTile className={classes.gridListTile} key={tile.img} rows={2.7} style={ { height:'100%' }}>
                                <Card className={classes.cardImage} elevation={0}>
                                    <CardContent>
                                        <img className={classes.image} src={tile.img} alt={tile.title} />
                                    </CardContent>
                                </Card>
                
                                <div className={classes.cardElement}>
                                    <div className={classes.cardOverlay}></div>
                                    <Card className={classes.cardList} elevation={0}>
                                        <div className={classes.cardItem}>
                                            <CardContent className={classes.cardContent}>
                                                <img className={classes.icon} src={tile.icon} alt={tile.title}></img>
                                                <Typography variant="h4" component="h5" gutterBottom>
                                                    {tile.title}
                                                </Typography>
                                                <Typography className={classes.paragraph} variant="subtitle1" color="textSecondary">
                                                    {tile.description}
                                                </Typography>
                                                {tile.last &&
                                                    <Button className={classes.btn} variant="contained" color="secondary" endIcon={<ArrowForwardIosIcon />}>Prendre Rendez-Vous</Button>
                                                }
                                            </CardContent>
                                        </div>
                                        {!tile.last &&
                                        <DoubleArrowIcon className={classes.outsideIcon}></DoubleArrowIcon>
                                        }
                                    </Card>        
                                </div>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </div>
    )
}


