import React, { useState } from 'react'
import { Box, Grid, Text } from 'grommet'
import { useWindowSize } from '../hooks'
import { Navbar } from '../components/Navbar'
import { HeadingInvoices } from '../components/Heading'
import { InvoiceList } from './InvoiceList'
import { Invoice } from '../types'
import invoiceData from '../data/data.json'
import { EmptyPage } from './EmptyPage'
import { AppGridContainer } from './styles'
import Button from '../components/Button'

const AppGrid: React.FC = (): JSX.Element => {
  const { width } = useWindowSize()
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const initialData: Invoice[] = invoiceData.map((invoice) => {
    const { id, createdAt, clientName, total, status } = invoice
    const invoiceFormated: Invoice = { id, date: createdAt, name: clientName, price: total, status }
    return invoiceFormated
  })

  const [invoices] = useState(initialData)

  return (
    <AppGridContainer>
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
          className="grid"
        >
          <Box gridArea="sidebar">
            <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          </Box>
          <Box gridArea="main" justify="center" align="center" className="main-content">
            <HeadingInvoices numberOfInvoices={invoices.length} />
            <Button label="Mark as Paid" />
            <Button label="Delete" className="danger" />
            <Button label="Save as Draft" className="gray-light" />
            <Button label="Save as Draft" className="gray-dark" />
            <Button label="Edit" className="white" />
            <Button label="Edit" className="black" />
            <Button label="+ Add New Item" className="white large" />
            {invoices.length > 0 ? <InvoiceList invoices={invoices} /> : <EmptyPage />}
          </Box>
        </Grid>
      ) : (
        <Text>Grid is not supported by your browser</Text>
      )}
    </AppGridContainer>
  )
}

export default AppGrid
