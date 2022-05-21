import React from 'react'
import { InvoiceStatusContainer } from './styles'

const InvoiceStatus: React.FC = (): JSX.Element => (
  <InvoiceStatusContainer>
    <span className="dot" />
    Paid
  </InvoiceStatusContainer>
)

export default InvoiceStatus
