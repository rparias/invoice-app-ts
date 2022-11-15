import invoiceData from './data.json'

export const getInvoice = (id: string): any => {
  const currentInvoice = invoiceData.filter((invoice) => invoice.id === id)
  if (currentInvoice.length > 0) {
    return currentInvoice[0]
  }

  return []
}
