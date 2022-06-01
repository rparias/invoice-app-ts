import React from 'react'
import { Invoice } from '../../components/Invoice'
import { InvoiceListContainer } from './styles'
import { InvoiceList as InvoiceListProps } from '../../types'

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices }): JSX.Element => {
  const invoiceList = invoices.map((invoice) => {
    const { id, date, name, price, status } = invoice
    return <Invoice key={id} id={id} date={date} name={name} price={price} status={status} />
  })
  return <InvoiceListContainer>{invoiceList}</InvoiceListContainer>
}

export default InvoiceList
