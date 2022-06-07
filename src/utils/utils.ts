const returnFirstWord = (sentence: string): string => sentence.split(' ')[0]

const getNumberOfInvoices = (number: number): string => {
  let message = 'No invoices'
  if (number === 1) {
    message = 'There is 1 total invoice'
  } else if (number > 1) {
    message = `There are ${number} total invoices`
  }
  return message
}

export { returnFirstWord, getNumberOfInvoices }
