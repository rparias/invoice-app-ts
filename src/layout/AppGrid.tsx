import React from 'react'
import { Box, Grid, Text } from 'grommet'
import { useWindowSize } from '../hooks'
import { Navbar } from '../components/Navbar'
import { HeadingInvoices } from '../components/Heading'
import { InvoiceList } from './InvoiceList'

const AppGrid: React.FC = (): JSX.Element => {
  const { width } = useWindowSize()
  const invoices = [
    { id: 'RT3080', date: '19 Aug 2021', name: 'Jensen Huang', price: '$1,800.90', status: 'paid' },
    {
      id: 'RT3081',
      date: '11 Aug 2022',
      name: 'Ronald Arias',
      price: '$1,708.90',
      status: 'pending'
    }
  ]
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
          >
            <HeadingInvoices />
            <InvoiceList invoices={invoices} />
          </Box>
        </Grid>
      ) : (
        <Text>Grid is not supported by your browser</Text>
      )}
    </>
  )
}

export default AppGrid
