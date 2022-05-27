import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const data = [
  {
    title: 'BÁSICO',
    price: '$35.090 Mes',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ]
  },
  {
    title: 'GOLDEN',
    subheader: 'EL más popular',
    price: '$79.090 Mes',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ]
  },
  {
    title: 'PROFESIONAL',
    price: '$105.090 Mes',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ]
  },
];

function Cards() {
  return (
    <Card elevation={2} >
      <CardMedia
        component='img'
        height='140'
        image='../Image/isotipoEnergym.png'
        alt='Servicios disponibles'
      />
      <CardContent>
        <Typography gutterBottom variant='h4' fontWeight= 'bold' component='div'>
          mdspdds
        </Typography>
        <Typography variant='body2'  color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' fullWidth>¡AFILIATE YA!</Button>
      </CardActions>
    </Card>
  )
}

export default Cards