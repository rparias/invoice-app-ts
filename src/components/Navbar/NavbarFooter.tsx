import React from 'react'
import { Box, Button, Avatar } from 'grommet'
import { Sun } from 'grommet-icons'

interface Props {
  handleOnClick: () => void
}

const NavbarFooter: React.FC<Props> = ({ handleOnClick }): JSX.Element => (
  <Box width="100%">
    <Box align="center" justify="center">
      <Button a11yTitle="Change Dark or Light Theme" icon={<Sun />} onClick={handleOnClick} />
      <hr style={{ width: '100%', borderTop: '1px solid #494E6E', borderBottom: 'none' }} />
      <Box pad="medium">
        <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
      </Box>
    </Box>
  </Box>
)

export default NavbarFooter
