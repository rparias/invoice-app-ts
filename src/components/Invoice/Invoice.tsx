import React from 'react'
import { Box, Text } from 'grommet'
import { InvoiceContainer } from './styles'
import { InvoiceStatus } from '../InvoiceStatus'
import { Invoice as InvoiceProps } from '../../types'

const Invoice: React.FC<InvoiceProps> = ({ id, date, name, price, status }): JSX.Element => (
  <Box
    background={{ dark: 'dark-3', light: '#fff' }}
    width="100%"
    round="small"
    elevation="xsmall"
    style={{ padding: '0 2rem' }}
  >
    <InvoiceContainer>
      <div className="invoice__header">
        <Text color="dark-3" weight="bold">
          #
        </Text>
        <Text a11yTitle="Invoice Id" gridArea="id" weight="bold">
          {id}
        </Text>
      </div>
      <div>
        <Text color="dark-6">Due </Text>
        <Text a11yTitle="Invoice date" gridArea="date" color="dark-3">
          {date}
        </Text>
      </div>
      <Text a11yTitle="Invoice name" gridArea="name" color="dark-6" className="invoice__header">
        {name}
      </Text>
      <Text a11yTitle="Invoice price" className="price" gridArea="price" weight="bold">
        {`$${price.toFixed(2)}`}
      </Text>
      <div className="invoice__status">
        <InvoiceStatus status={status} />
      </div>
    </InvoiceContainer>
  </Box>
)

export default Invoice
