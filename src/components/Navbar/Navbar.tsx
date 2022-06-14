import React from 'react'
import { NavbarContainer } from './styles'
import NavbarHeader from './NavbarHeader'
import NavbarFooter from './NavbarFooter'

interface Props {
  isDarkTheme: boolean
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<Props> = ({ isDarkTheme, setIsDarkTheme }): JSX.Element => (
  <NavbarContainer>
    <NavbarHeader />
    <NavbarFooter isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
  </NavbarContainer>
)

export default Navbar
