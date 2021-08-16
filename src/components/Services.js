import React from 'react'
import { makeStyles } from "@material-ui/core"
import '@fontsource/roboto'
import Service from './Service'

const services = [
    {
        id: 1,
        title: 'Pathologies traitées',
        description: 'Vous recherchez un spécialiste pour traiter votre pathologie ? Pas de problèmes nous prenons en charge la majorité des pathologies liées à l’appareil locomoteur (troubles osseux, articulaires ou musculaires) ; les problèmes cardio-respiratoires ; les problèmes liés au système nerveux.',
        image: '/body-icons.svg',
        last: false,
    },
    {
        id: 2,  
        title: 'Prise en charge',
        description: 'Vous vous sentez plus à l’aise avec certaines méthodes de traitements ? Nous nous adaptons à vos besoins grâce aux formations et aux spécialisations acquises et aux différents types d’appareils transportables dont nous disposons ',
        image: '/physical-therapy.svg',
        last: false,
    },
    {
        id: 3,  
        title: 'En restant chez vous',
        description: 'Vous ne pouvez pas vous déplacer à cause de problèmes ambulatoires ou même de locomotion ? Nous nous déplaçons à votre domicile pour effectuer vos séances de kinésithérapie.',
        image: '/home.svg',
        last: false,
    },
 ]

const useStyles = makeStyles((theme) => ({
    container: {
      },
    subContainer: {
        maxWidth: '1160px',
        height: '100%',
        margin: '0 auto',

        '@media (max-width: 1200px)': {
            maxWidth: '90%',
        },
        '@media (max-width: 959px)': {
            textAlign: 'center',
        },
    },
}))

export default function Services() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.subContainer}>
                {services.map((service) => (
                <Service key={service.id} service={service}/>
                ))}
            </div>
        </div>
    )
}
