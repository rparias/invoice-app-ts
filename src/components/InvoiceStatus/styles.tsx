import styled from 'styled-components'

const InvoiceStatusContainer = styled.div`
  padding: 0.75rem 1.75rem;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1rem;
  color: #33d69f;
  background-color: #33d69f0f;
  border-radius: 6px;

  .dot {
    height: 0.625rem;
    width: 0.625rem;
    margin-right: 0.625rem;
    background-color: #33d69f;
    border-radius: 50%;
    display: inline-block;
  }
`

export { InvoiceStatusContainer }
