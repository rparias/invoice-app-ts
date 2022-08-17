import React from 'react'
import { Box, Text } from 'grommet'
import { Button } from '../../components/Button'
import { InvoiceStatus } from '../../components/InvoiceStatus'
import { InvoiceDetailContainer } from './styles'

const InvoiceDetail: React.FC = (): JSX.Element => (
  <Box
    background={{ dark: 'dark-3', light: '#fff' }}
    width="100%"
    round="small"
    elevation="xsmall"
    style={{ padding: '0 2rem' }}
  >
    <InvoiceDetailContainer>
      <div className="status">
        <Text a11yTitle="Status" color="#858BB2">
          Status
        </Text>
        <InvoiceStatus status="pending" />
      </div>
      <div className="actions">
        <Button label="Edit" className="white" />
        <Button label="Delete" className="danger" />
        <Button label="Mark as Paid" />
      </div>
    </InvoiceDetailContainer>
  </Box>
)

export default InvoiceDetail
