import styled from 'styled-components'

const InvoiceDetailContainer = styled.header`
  width: 100%;
  padding: 1.8rem 0;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .status {
    display: flex;
    align-items: center;

    span {
      margin-right: 1rem;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    display: none;

    @media only screen and (min-width: 768px) {
      display: inline;
    }

    > * {
      margin-right: 0.5rem;
    }

    button:last-child {
      margin-right: 0;
    }
  }
`

export { InvoiceDetailContainer }
