import React, { useCallback, useEffect, useState } from 'react'
import { Box, Grid, Heading, Text } from 'grommet'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { InvoiceStatus } from '../../components/InvoiceStatus'
import { InvoiceDetailContainer } from './styles'
import { getInvoice } from '../../data/invoices'
import { InvoiceDTO } from '../../types/DTO/invoice.dto'

const InvoiceDetail: React.FC = (): JSX.Element => {
  const { id: invoiceId } = useParams()
  const [invoice, setInvoice] = useState<InvoiceDTO | undefined>(undefined)

  const getCurrentInvoice = useCallback(() => {
    if (invoiceId) {
      const currentInvoice = getInvoice(invoiceId)
      if (currentInvoice) {
        setInvoice(currentInvoice)
      }
    }
  }, [invoiceId])

  useEffect(() => {
    getCurrentInvoice()
  }, [getCurrentInvoice])

  if (invoice === undefined) {
    return <Heading level={2}>There is no invoice with {invoiceId} id</Heading>
  }

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
            <InvoiceStatus status={invoice.status} />
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
        <Box direction="row" justify="between" a11yTitle="Invoice ID order and address">
          <Box>
            <Heading level={1} margin={{ bottom: '0.3rem', top: '0' }}>
              <Text style={{ fontSize: '0.8em' }} color="dark-4">
                #
              </Text>
              {invoiceId}
            </Heading>
            <Text size="small" color="dark-4">
              {invoice.description}
            </Text>
          </Box>
          <Box>
            <Text size="small" color="dark-4" textAlign="end">
              {invoice.senderAddress.street}
            </Text>
            <Text size="small" color="dark-4" textAlign="end">
              {invoice.senderAddress.city}
            </Text>
            <Text size="small" color="dark-4" textAlign="end">
              {invoice.senderAddress.postCode}
            </Text>
            <Text size="small" color="dark-4" textAlign="end">
              {invoice.senderAddress.country}
            </Text>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default InvoiceDetail
