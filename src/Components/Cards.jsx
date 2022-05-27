import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'


function Cards() {
  return (
    <Card elevation={3} >
      <CardMedia
        component='img'
        height='140'
        image=''
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