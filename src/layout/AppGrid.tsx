import React from 'react'
import { Box, Grid, Text } from 'grommet'
import Navbar from '../components/Navbar'

const AppGrid: React.FC = (): JSX.Element => (
  <>
    {Grid.available ? (
      <Grid
        fill
        rows={['auto', 'flex']}
        columns={['auto', 'flex']}
        areas={[
          { name: 'sidebar', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] }
        ]}
        style={{ height: '100vh' }}
      >
        <Box gridArea="sidebar">
          <Navbar />
        </Box>
        <Box gridArea="main" justify="center" align="center">
          <Text>main</Text>
        </Box>
      </Grid>
    ) : (
      <Text>Grid is not supported by your browser</Text>
    )}
  </>
)

export default AppGrid
