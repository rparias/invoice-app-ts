import React from 'react'
import { Box, Button, Avatar } from 'grommet'
import { Sun } from 'grommet-icons'
import { ReactComponent as Logo } from '../../assets/logo.svg'

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
        <Box width="100%">
          <Box align="center" justify="center">
            <Button a11yTitle="Change Dark or Light Theme" icon={<Sun />} onClick={handleOnClick} />
            <hr style={{ width: '100%', borderTop: '1px solid #494E6E', borderBottom: 'none' }} />
            <Box pad="medium">
              <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
            </Box>
          </Box>
        </Box>
      </Box>
    </nav>
  )
}

export default Navbar
