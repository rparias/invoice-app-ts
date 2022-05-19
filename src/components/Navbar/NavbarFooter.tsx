import React from 'react'
import { Box, Button, Avatar } from 'grommet'
import { Sun } from 'grommet-icons'
import { NavbarFooterContainer } from './styles'

interface Props {
  handleOnClick: () => void
}

const NavbarFooter: React.FC<Props> = ({ handleOnClick }): JSX.Element => (
  <NavbarFooterContainer>
    <Button a11yTitle="Change Dark or Light Theme" icon={<Sun />} onClick={handleOnClick} />
    <hr />
    <Box pad="medium">
      <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
    </Box>
  </NavbarFooterContainer>
)

export default NavbarFooter
