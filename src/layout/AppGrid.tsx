import React, { useState } from 'react'
import { Box, Grid, Text } from 'grommet'
import { useWindowSize } from '../hooks'
import { Navbar } from '../components/Navbar'
import { Home } from '../pages/Home'
import { AppGridContainer } from './styles'

const AppGrid: React.FC = (): JSX.Element => {
  const { width } = useWindowSize()
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <AppGridContainer>
      {Grid.available ? (
        <Grid
          fill
          rows={['auto', 'flex']}
          columns={['auto', 'flex']}
          areas={[
            {
              name: 'sidebar',
              start: width > 1024 ? [0, 1] : [0, 0],
              end: width > 1024 ? [0, 1] : [1, 0]
            },
            { name: 'main', start: [1, 1], end: [1, 1] }
          ]}
          className="grid"
        >
          <Box gridArea="sidebar">
            <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          </Box>
          <Box gridArea="main" justify="center" align="center" className="main-content">
            <Home />
          </Box>
        </Grid>
      ) : (
        <Text>Grid is not supported by your browser</Text>
      )}
    </AppGridContainer>
  )
}

export default AppGrid
