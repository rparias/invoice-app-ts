import React from 'react'
import { Box, Grid, Text } from 'grommet'
import { useWindowSize } from '../hooks'
import { Navbar } from '../components/Navbar'
import { Invoice } from '../components/Invoice'

const AppGrid: React.FC = (): JSX.Element => {
  const { width } = useWindowSize()
  return (
    <>
      {Grid.available ? (
        <Grid
          fill
          rows={['auto', 'flex']}
          columns={['auto', 'flex']}
          areas={[
            {
              name: 'sidebar',
              start: width! > 768 ? [0, 1] : [0, 0],
              end: width! > 768 ? [0, 1] : [1, 0]
            },
            { name: 'main', start: [1, 1], end: [1, 1] }
          ]}
          style={{ height: '100vh' }}
        >
          <Box gridArea="sidebar">
            <Navbar />
          </Box>
          <Box gridArea="main" justify="center" align="center">
            <Text>Invoices</Text>
            <Invoice />
          </Box>
        </Grid>
      ) : (
        <Text>Grid is not supported by your browser</Text>
      )}
    </>
  )
}

export default AppGrid
