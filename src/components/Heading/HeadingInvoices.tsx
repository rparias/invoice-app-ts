import React from 'react'
import { Box, Button, Heading, Text } from 'grommet'
import { Filter as FilterByStatus } from '../Filter'
import { HeadingContainer } from './styles'

const HeadingInvoices: React.FC = (): JSX.Element => (
  <HeadingContainer>
    <Box>
      <Heading level={1}>Invoices</Heading>
      <Text color="dark-4">No invoices</Text>
    </Box>
    <Box direction="row">
      <FilterByStatus />
      <Button primary label="New Invoice" />
    </Box>
  </HeadingContainer>
)

export default HeadingInvoices
