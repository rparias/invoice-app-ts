import React from 'react'
import { Box, Grid, Text } from 'grommet'
import { useWindowSize } from '../hooks'
import { Navbar } from '../components/Navbar'
import { HeadingInvoices } from '../components/Heading'
import { InvoiceList } from './InvoiceList'
import { Invoice } from '../types'
import invoiceData from '../data/data.json'

const AppGrid: React.FC = (): JSX.Element => {
  const { width } = useWindowSize()
  const invoices: Invoice[] = invoiceData.map((invoice) => {
    const { id, createdAt, clientName, total, status } = invoice
    const invoiceFormated: Invoice = { id, date: createdAt, name: clientName, price: total, status }
    return invoiceFormated
  })

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
            pad={width >= 1440 ? 'xlarge' : 'medium'}
            style={{ display: 'block' }}
          >
            <HeadingInvoices />
            {/* TODO: remove slice */}
            <InvoiceList invoices={invoices.slice(0, 4)} />
          </Box>
        </Grid>
      ) : (
        <Text>Grid is not supported by your browser</Text>
      )}
    </>
  )
}

export default AppGrid
