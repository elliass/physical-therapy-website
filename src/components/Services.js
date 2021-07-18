import React from 'react'
import { useState } from 'react'
import { makeStyles } from "@material-ui/core"
import '@fontsource/roboto'
import Service from './Service'

const services = [
    {
        id: 1,
        title: 'Pathologies traitées',
        description: 'Une réeducation préventive et/ou curative vous sera proposée. Nous prenons en charge les problèmes orthopédiques (articulaire, musculaire osseux). Ainsi que les pathologies neurologiques et cardio-pulmonaires.',
        image: '/body-icons.svg',
        last: false,
    },
    {
        id: 2,  
        title: 'Prise en charge',
        description: 'Le thérapeute utilise un pannel de techniques. Les traitements seront réalisés sur base de méthodes acquises au cours de différentes spécialisations. Le principe étant de s’adapter aux différents types de patients rencontrés.',
        image: '/physical-therapy.svg',
        last: false,
    },
    {
        id: 3,  
        title: 'En restant chez vous',
        description: 'Notre spécialiste se déplace chez vous pour vous aider à vous remettre de vos douleureuses blessures ou à récupérer après une intervention chirurgicale.',
        image: '/home.svg',
        last: false,
    },
 ]

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'white',
        height: '300vh',
      },
    subContainer: {
        // border: 'solid 1px black',
        maxWidth: '1160px',
        height: '100%',
        margin: '0 auto',
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
