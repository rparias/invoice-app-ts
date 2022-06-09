import styled from 'styled-components'

const NavbarContainer = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1e2139;
  border-radius: 0 1rem 1rem 0;
  position: fixed;

  @media only screen and (max-width: 1024px) {
    height: auto;
    flex-direction: row;
    border-radius: 0 0 1rem 1rem;
    position: static;
  }
`

const NavbarFooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    width: 98%;
    border-top: 1px solid #494e6e;
    border-bottom: none;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: row;
    width: 150px;
    padding-right: 1rem;
    hr {
      width: 0;
      height: 100%;
      border-right: 1px solid #494e6e;
      border-left: none;
    }
  }
`

const NavbarHeaderContainer = styled.div`
  width: 100%;
  height: 100px;

  @media only screen and (max-width: 1024px) {
    width: 100px;
  }
`
export { NavbarContainer, NavbarHeaderContainer, NavbarFooterContainer }
