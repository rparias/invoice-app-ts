import React, { useState } from 'react'
import { close } from '../../state/reducers/formSlice'
import { HeadingInvoices } from '../../components/Heading'
import { Form } from '../../components/Form'
import { InvoiceList } from '../../layout/InvoiceList'
import { EmptyPage } from '../../layout/EmptyPage'
import { Invoice } from '../../types'
import { useAppSelector, useAppDispatch } from '../../hooks'
import invoiceData from '../../data/data.json'

const initialData: Invoice[] = invoiceData.map((invoice) => {
  const { id, createdAt, clientName, total, status } = invoice
  const invoiceFormated: Invoice = { id, date: createdAt, name: clientName, price: total, status }
  return invoiceFormated
})

const Home: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const isFormOpen = useAppSelector((state) => state.form.isOpen)
  const [invoices] = useState(initialData)

  return (
    <>
      {isFormOpen && <Form onClose={() => dispatch(close())} />}
      <HeadingInvoices numberOfInvoices={invoices.length} />
      {invoices.length > 0 ? <InvoiceList invoices={invoices} /> : <EmptyPage />}
    </>
  )
}

export default Home
