import React from 'react'
import { Box, Button, Heading, Text } from 'grommet'
import { Filter as FilterByStatus } from '../Filter'
import { HeadingContainer } from './styles'
import { useWindowSize } from '../../hooks'
import { returnFirstWord } from '../../utils'

const HeadingInvoices: React.FC = (): JSX.Element => {
  const labelText = 'New Invoice'
  const { width } = useWindowSize()

  return (
    <HeadingContainer>
      <Box>
        <Heading level={1}>Invoices</Heading>
        <Text color="dark-4">No invoices</Text>
      </Box>
      <Box direction="row">
        <FilterByStatus />
        <Button primary label={width >= 768 ? labelText : returnFirstWord(labelText)} />
      </Box>
    </HeadingContainer>
  )
}

export default HeadingInvoices
