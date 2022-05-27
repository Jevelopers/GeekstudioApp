
// @mui material ->components
import { Button, CssBaseline, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
// @mui material ->Iconos
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import React from 'react'


function Navbar() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box component='header'
                sx={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1534258936925-c58bed479fcb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minHeight: '80vh'
                }}>
                <Container sx={{ p: { xs: 3, lg: 5 } }}>
                    <Grid
                        container
                        flexDirection='row'
                        spacing={2}
                        alignItems='center'
                        xs={12}
                        lg={6}>
                        <Grid item >
                            <ElectricBoltIcon color='primary' fontSize='large' />
                        </Grid>
                        <Grid item >
                            <Typography variant='h5' fontWeight='bold' color='primary'>ENERGYM</Typography>
                        </Grid>

                    </Grid>
                    <Container component='header__content' sx={{ my: { xs: 3, lg: 15 }, textAlign: 'center' }}>
                        <Typography variant='h1' fontWeight='bold' color='primary'>APTITUD ENERGYM</Typography>
                        <Typography variant='h5' color='white'>El ejercicio te ayuda a mejorar tu salud física y mental y a contar con un sistema inmune fuerte. Llena tu vida de energía y motivación. Supera tus límites con programas de entrenamiento diseñados por profesionales de la salud, de acuerdo con tus objetivos.</Typography>
                        <Button variant="contained" size="large" startIcon={<FitnessCenterIcon />}
                            sx={{ my: 5, mx: 2 }}>¡AFILIATE YA!</Button>
                        <Button variant="outlined" size="large" startIcon={<SportsGymnasticsIcon />}
                            sx={{ my: 5 }}>VER PLANES</Button> 
                    </Container>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default Navbar