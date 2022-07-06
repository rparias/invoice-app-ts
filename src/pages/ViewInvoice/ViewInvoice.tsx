import React from 'react'
import { Box, Text } from 'grommet'
import { Invoice } from '../../types'
import { InvoiceStatus } from '../../components/InvoiceStatus'

interface Props {
  invoice: Invoice
}

const ViewInvoice: React.FC<Props> = ({ invoice }): JSX.Element => {
  const { status } = invoice
  return (
    <Box
      background={{ dark: 'dark-3', light: '#fff' }}
      width="100%"
      round="small"
      elevation="xsmall"
      style={{ padding: '0 2rem' }}
    >
      <Text id="view-invoice-status" gridArea="id" weight="bold">
        Status
      </Text>
      <InvoiceStatus ariaLabelledby="view-invoice-status" status={status} />
    </Box>
  )
}

export default ViewInvoice
