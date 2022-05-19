import styled from 'styled-components'

const NavbarContainer = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1e2139;
  border-radius: 0 1rem 1rem 0;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
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

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    hr {
      transform: rotate(90deg);
    }
  }
`
export { NavbarContainer, NavbarFooterContainer }
