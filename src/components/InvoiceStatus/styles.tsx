import styled from 'styled-components'

type Props = {
  status: string
}

const InvoiceStatusContainer = styled.div<Props>`
  padding: 0.75rem 1.75rem;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: capitalize;
  line-height: 1rem;
  color: ${(props) => (props.status === 'paid' ? '#33d69f' : '#FF8F00')};
  background-color: ${(props) => (props.status === 'paid' ? '#33d69f0f' : '#FF8F000F')};
  border-radius: 6px;
  width: 85px;

  .dot {
    height: 0.625rem;
    width: 0.625rem;
    margin-right: 0.625rem;
    background-color: ${(props) => (props.status === 'paid' ? '#33d69f' : '#FF8F00')};
    border-radius: 50%;
    display: inline-block;
  }
`

export { InvoiceStatusContainer }
