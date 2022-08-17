import styled from 'styled-components'

type Props = {
  status: string
  ariaLabelledby?: string
}

const statusBgColor = {
  paid: '#33d69f0f',
  pending: '#FF8F000F',
  draft: '#eeeeee'
}

const statusTextColor = {
  paid: '#33d69f',
  pending: '#FF8F00',
  draft: '#373B53'
}

const InvoiceStatusContainer = styled.div<Props>`
  padding: 0.75rem 1.75rem;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  line-height: 1rem;
  color: ${(props) => statusTextColor[props.status as keyof typeof statusTextColor]};
  background-color: ${(props) => statusBgColor[props.status as keyof typeof statusBgColor]};
  border-radius: 6px;
  min-width: 85px;

  .dot {
    height: 0.625rem;
    width: 0.625rem;
    margin-right: 0.625rem;
    background-color: ${(props) => statusTextColor[props.status as keyof typeof statusTextColor]};
    border-radius: 50%;
    display: inline-block;
  }
`

export { InvoiceStatusContainer }
