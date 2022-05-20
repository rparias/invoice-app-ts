import React from 'react'
import { Tag, Text } from 'grommet'
import { InvoiceContainer } from './styles'

const Invoice: React.FC = (): JSX.Element => (
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
    <Tag a11yTitle="Invoice status" gridArea="status" value="paid" />
  </InvoiceContainer>
)

export default Invoice
