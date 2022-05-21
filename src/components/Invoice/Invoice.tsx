import React from 'react'
import { Box, Text } from 'grommet'
import { InvoiceContainer } from './styles'
import { InvoiceStatus } from '../InvoiceStatus'

const Invoice: React.FC = (): JSX.Element => (
  <Box background={{ dark: 'dark-3', light: 'light-1' }} width="100%" round="small">
    <InvoiceContainer>
      <div className="invoice__header">
        <Text color="dark-3" weight="bold">
          #
        </Text>
        <Text a11yTitle="Invoice Id" gridArea="id" weight="bold">
          RT3080
        </Text>
      </div>
      <div>
        <Text color="dark-6">Due </Text>
        <Text a11yTitle="Invoice date" gridArea="date" color="dark-3">
          19 Aug 2021
        </Text>
      </div>
      <Text a11yTitle="Invoice name" gridArea="name" color="dark-6" className="invoice__header">
        Jensen Huang
      </Text>
      <Text a11yTitle="Invoice price" gridArea="price" weight="bold">
        $1,800.90
      </Text>
      <div className="invoice__status">
        <InvoiceStatus status="paid" />
      </div>
    </InvoiceContainer>
  </Box>
)

export default Invoice
