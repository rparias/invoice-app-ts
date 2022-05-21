import React from 'react'
import { InvoiceStatusContainer } from './styles'

type Props = {
  status: string
}
const InvoiceStatus: React.FC<Props> = ({ status }): JSX.Element => (
  <InvoiceStatusContainer status={status.toLowerCase()}>
    <span className="dot" />
    {status}
  </InvoiceStatusContainer>
)

export default InvoiceStatus
