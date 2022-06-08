import React, { useState } from 'react'
import { Box, Grid, Text } from 'grommet'
import { useWindowSize } from '../hooks'
import { Navbar } from '../components/Navbar'
import { HeadingInvoices } from '../components/Heading'
import { InvoiceList } from './InvoiceList'
import { Invoice } from '../types'
import invoiceData from '../data/data.json'
import { EmptyPage } from './EmptyPage'

const AppGrid: React.FC = (): JSX.Element => {
  const { width } = useWindowSize()
  const initialData: Invoice[] = invoiceData.map((invoice) => {
    const { id, createdAt, clientName, total, status } = invoice
    const invoiceFormated: Invoice = { id, date: createdAt, name: clientName, price: total, status }
    return invoiceFormated
  })

  const [invoices] = useState(initialData)

  return (
    <>
      {Grid.available ? (
        <Grid
          fill
          rows={['auto', 'flex']}
          columns={['auto', 'flex']}
          areas={[
            {
              name: 'sidebar',
              start: width > 1024 ? [0, 1] : [0, 0],
              end: width > 1024 ? [0, 1] : [1, 0]
            },
            { name: 'main', start: [1, 1], end: [1, 1] }
          ]}
          style={{ height: '100vh' }}
        >
          <Box gridArea="sidebar">
            <Navbar />
          </Box>
          <Box
            gridArea="main"
            justify="center"
            align="center"
            style={{ display: 'block', padding: width >= 1440 ? '1rem 20rem' : '2rem' }}
          >
            <HeadingInvoices numberOfInvoices={invoices.length} />
            {invoices.length > 0 ? <InvoiceList invoices={invoices} /> : <EmptyPage />}
          </Box>
        </Grid>
      ) : (
        <Text>Grid is not supported by your browser</Text>
      )}
    </>
  )
}

export default AppGrid
