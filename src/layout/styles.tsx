import styled from 'styled-components'

const AppGridContainer = styled.div`
  background: #f8f8f8;

  .grid {
    height: 100%;
  }

  .main-content {
    padding: 2rem;
    height: 100%;
  }

  @media only screen and (min-width: 1025px) {
    .main-content {
      padding: 1rem 10rem 1rem 15rem;
    }
  }

  @media only screen and (min-width: 1440px) {
    .main-content {
      padding: 1rem 15rem 1rem 20rem;
    }
  }
`

export { AppGridContainer }
