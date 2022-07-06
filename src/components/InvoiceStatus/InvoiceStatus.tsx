import React from 'react'
import { InvoiceStatusContainer } from './styles'

type Props = {
  status: string
  ariaLabelledby?: string
}
const InvoiceStatus: React.FC<Props> = ({ status, ariaLabelledby }): JSX.Element => (
  <InvoiceStatusContainer
    status={status.toLowerCase()}
    aria-labelledby={ariaLabelledby ?? undefined}
  >
    <span className="dot" />
    {status}
  </InvoiceStatusContainer>
)

InvoiceStatus.defaultProps = {
  ariaLabelledby: undefined
}

export default InvoiceStatus
