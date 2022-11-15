import React from 'react'
import { Box, Grid, Heading, Text } from 'grommet'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { InvoiceStatus } from '../../components/InvoiceStatus'
import { InvoiceDetailContainer } from './styles'

const InvoiceDetail: React.FC = (): JSX.Element => {
  const { id: invoiceId } = useParams()

  return (
    <Grid width="100%" gap="medium">
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
      <Box
        background={{ dark: 'dark-3', light: '#fff' }}
        width="100%"
        round="small"
        elevation="xsmall"
        style={{ padding: '3rem' }}
      >
        <Heading level={1}>
          <Text style={{ fontSize: '0.8em' }} color="dark-4">
            #
          </Text>
          {invoiceId}
        </Heading>
      </Box>
    </Grid>
  )
}

export default InvoiceDetail
