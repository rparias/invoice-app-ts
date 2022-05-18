import React from 'react'
import { Box } from 'grommet'
import NavbarHeader from './NavbarHeader'
import NavbarFooter from './NavbarFooter'

const Navbar: React.FC = (): JSX.Element => {
  const handleOnClick = (): void => {
    console.log('hello world')
  }

  return (
    <nav className="navbar" style={{ height: '100%' }}>
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
    </nav>
  )
}

export default Navbar
