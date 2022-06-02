import styled from 'styled-components'

const InvoiceContainer = styled.article`
  width: 100%;
  padding: 1.8rem 0;
  background: transparent;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  grid-template-areas: 'id date name price status';
  align-items: center;

  @media only screen and (max-width: 768px) {
    grid-template-areas:
      'id name'
      'date status'
      'price status';

    .invoice__header {
      margin-bottom: 1.5rem;
    }
  }
`

export { InvoiceContainer }
