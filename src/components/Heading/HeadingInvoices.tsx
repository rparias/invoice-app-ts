import React from 'react'
import { Box, Button, Heading, Menu, Text } from 'grommet'
import { HeadingContainer } from './styles'

const HeadingInvoices: React.FC = (): JSX.Element => (
  <HeadingContainer>
    <Box>
      <Heading level={1}>Invoices</Heading>
      <Text color="dark-4">No invoices</Text>
    </Box>
    <Box direction="row">
      <Menu label="Menu" items={[{ label: 'First Action' }, { label: 'Second Action' }]} />
      <Button primary label="New Invoice" />
    </Box>
  </HeadingContainer>
)

export default HeadingInvoices
