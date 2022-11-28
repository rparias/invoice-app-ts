import invoiceData from './data.json'
import { InvoiceDTO } from '../types/DTO/invoice.dto'

export const getInvoice = (id: string): InvoiceDTO | undefined => {
  const currentInvoice = invoiceData.filter((invoice) => invoice.id === id)
  if (currentInvoice.length > 0) {
    return currentInvoice[0]
  }

  return undefined
}
