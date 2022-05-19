import React from 'react'
import { Tag, Text } from 'grommet'
import { InvoiceContainer } from './styles'

const Invoice: React.FC = (): JSX.Element => (
  <InvoiceContainer>
    <Text a11yTitle="Invoice Id" gridArea="id">
      #RT3080
    </Text>
    <Text a11yTitle="Invoice date" gridArea="date">
      Due 19 Aug 2021
    </Text>
    <Text a11yTitle="Invoice name" gridArea="name">
      Jensen Huang
    </Text>
    <Text a11yTitle="Invoice price" gridArea="price">
      $1,800.90
    </Text>
    <Tag a11yTitle="Invoice status" gridArea="status" value="paid" />
  </InvoiceContainer>
)

export default Invoice
