import { Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import Cards from './Cards'

function Aside() {
  return (
    <React.Fragment>
      <Container component='aside'>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          sx={{my: -10}}>
          <Grid item xs={12} md={8} lg={4}>
            <Box
              sx={{
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'secondary.main'
                },
                borderRadius: '1rem',
              }}
            >
              <Cards />
            </Box>
          </Grid>
          <Grid item xs={12} md={8} lg={4}>
            <Box
              sx={{
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'secondary.main'
                },
                borderRadius: '1rem'
              }}
            >
              <Cards />
            </Box>
          </Grid>
          <Grid item xs={12} md={8} lg={4}>
            <Box
              sx={{
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'secondary.main'
                },
                borderRadius: '1rem'
              }}
            >
              <Cards />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Aside