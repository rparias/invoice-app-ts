import React from 'react'
import { Grommet } from 'grommet'
import theme from './grommet-styles/global-styles'
import AppGrid from './layout'

const App: React.FC = (): JSX.Element => (
  <Grommet theme={theme}>
    <AppGrid />
  </Grommet>
)

export default App
