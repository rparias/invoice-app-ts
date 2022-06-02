export type Invoice = {
  id: string
  date: string
  name: string
  price: number
  status: string
}

export type InvoiceList = {
  invoices: Invoice[]
}
