import React from 'react'
import { Box, Text } from 'grommet'
import { InvoiceContainer } from './styles'
import { InvoiceStatus } from '../InvoiceStatus'

type Props = {
  id: string
  date: string
  name: string
  price: string
  status: string
}

const Invoice: React.FC<Props> = ({ id, date, name, price, status }): JSX.Element => (
  <Box background={{ dark: 'dark-3', light: 'light-1' }} width="100%" round="small">
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
      <Text a11yTitle="Invoice price" gridArea="price" weight="bold">
        {price}
      </Text>
      <div className="invoice__status">
        <InvoiceStatus status={status} />
      </div>
    </InvoiceContainer>
  </Box>
)

export default Invoice
