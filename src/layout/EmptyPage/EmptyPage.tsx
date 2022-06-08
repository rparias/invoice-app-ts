import React from 'react'
import { Box, Heading, Text } from 'grommet'
import { ReactComponent as EmptyIllustration } from '../../assets/illustration-empty.svg'

const EmptyPage: React.FC = (): JSX.Element => (
  <Box align="center" justify="center" height="90%">
    <EmptyIllustration style={{ marginBottom: '3rem' }} />
    <Heading level={2}>There is nothing here</Heading>
    <Text color="dark-4">Create an invoice by clicking the</Text>
    <Text color="dark-4">
      <span style={{ fontWeight: 'bold' }}>New Invoice</span> button and get started
    </Text>
  </Box>
)

export default EmptyPage
