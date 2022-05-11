import React from 'react'
import { Grommet, Heading } from 'grommet'
import theme from './grommet-styles/global-styles'

const App: React.FC = (): JSX.Element => (
  <Grommet theme={theme}>
    <header>
      <Heading level="1">Aliquam porttitor mauris sit amet orci Aenean</Heading>
      <Heading level="2">Aliquam porttitor mauris sit amet orci Aenean</Heading>
      <Heading level="3">Aliquam porttitor mauris sit amet orci Aenean</Heading>
      <Heading level="4">Aliquam porttitor mauris sit amet orci Aenean</Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
        aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
        pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc
        tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
      </p>
    </header>
  </Grommet>
)

export default App
