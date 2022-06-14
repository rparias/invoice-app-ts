import React from 'react'
import { Box, Button, Avatar } from 'grommet'
import { Sun, Moon } from 'grommet-icons'
import { NavbarFooterContainer } from './styles'

interface Props {
  isDarkTheme: boolean
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
}

const NavbarFooter: React.FC<Props> = ({ isDarkTheme, setIsDarkTheme }): JSX.Element => {
  const handleOnClick = (): void => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <NavbarFooterContainer>
      <Button
        a11yTitle="Change Dark or Light Theme"
        icon={isDarkTheme ? <Sun /> : <Moon />}
        onClick={handleOnClick}
      />
      <hr />
      <Box pad="medium">
        {isDarkTheme}
        <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
      </Box>
    </NavbarFooterContainer>
  )
}

export default NavbarFooter
