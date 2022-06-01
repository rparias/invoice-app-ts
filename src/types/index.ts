export type Invoice = {
  id: string
  date: string
  name: string
  price: string
  status: string
}

export type InvoiceList = {
  invoices: Invoice[]
}
