import React from 'react'
import { Box } from 'grommet'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { NavbarHeaderContainer } from './styles'

const NavbarHeader: React.FC = (): JSX.Element => (
  <NavbarHeaderContainer>
    <Box
      background="brand"
      height="100%"
      align="center"
      justify="center"
      round={{ corner: 'right', size: '15px' }}
    >
      <Logo />
    </Box>
  </NavbarHeaderContainer>
)

export default NavbarHeader
