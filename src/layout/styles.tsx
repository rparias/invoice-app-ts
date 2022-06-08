import styled from 'styled-components'

const AppGridContainer = styled.div`
  background: #f8f8f8;

  .grid {
    height: 100vh;
  }

  .main-content {
    padding: 2rem;
    display: block;
  }

  @media only screen and (min-width: 1440px) {
    .main-content {
      padding: 1rem 20rem;
    }
  }
`

export { AppGridContainer }
