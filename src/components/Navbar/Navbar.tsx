import React from 'react'
import { NavbarContainer } from './styles'
import NavbarHeader from './NavbarHeader'
import NavbarFooter from './NavbarFooter'

const Navbar: React.FC = (): JSX.Element => {
  const handleOnClick = (): void => {
    console.log('hello world')
  }

  return (
    <NavbarContainer>
      <NavbarHeader />
      <NavbarFooter handleOnClick={handleOnClick} />
    </NavbarContainer>
  )
}

export default Navbar
