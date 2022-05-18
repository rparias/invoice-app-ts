import React from 'react'
import { Box } from 'grommet'
import NavbarContainer from './styles'
import NavbarHeader from './NavbarHeader'
import NavbarFooter from './NavbarFooter'

const Navbar: React.FC = (): JSX.Element => {
  const handleOnClick = (): void => {
    console.log('hello world')
  }

  return (
    <NavbarContainer>
      <Box
        flex
        background="dark-1"
        width="xsmall"
        align="center"
        round={{ corner: 'right', size: '15px' }}
        style={{ height: '100%', justifyContent: 'space-between' }}
      >
        <NavbarHeader />
        <NavbarFooter handleOnClick={handleOnClick} />
      </Box>
    </NavbarContainer>
  )
}

export default Navbar
