import React from 'react'
import { Box } from 'grommet'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const NavbarHeader: React.FC = (): JSX.Element => (
  <Box width="100%" height="100px">
    <Box
      background="brand"
      height="100%"
      align="center"
      justify="center"
      round={{ corner: 'right', size: '15px' }}
    >
      <Logo />
    </Box>
  </Box>
)

export default NavbarHeader
