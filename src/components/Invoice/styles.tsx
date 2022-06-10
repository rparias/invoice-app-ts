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

  .price {
    text-align: left;
    padding-right: 0;

    @media only screen and (min-width: 1024px) {
      text-align: right;
      padding-right: 4rem;
    }

    @media only screen and (min-width: 1600px) {
      padding-right: 6rem;
    }
  }

  .invoice__status {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 768px) {
      svg {
        display: none;
      }
    }
  }
`

export { InvoiceContainer }
