import styled from 'styled-components'

const InvoiceContainer = styled.article`
  border: 1px solid red;
  width: 80%;
  display: grid;
  grid-template-areas: 'id date name price status';

  @media only screen and (max-width: 425px) {
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
