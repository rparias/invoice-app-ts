import { returnFirstWord, getNumberOfInvoices } from './utils'

describe('returnFirstWord function', () => {
  it('should return the first word in the sentence', () => {
    const sentence = 'Filter by status'
    expect(returnFirstWord(sentence)).toBe('Filter')
  })

  it('should return the same word if the sentence only have one word', () => {
    const sentence = 'Something'
    expect(returnFirstWord(sentence)).toBe('Something')
  })

  it('should return an empty string if there is no sentence', () => {
    const sentence = ''
    expect(returnFirstWord(sentence)).toBe('')
  })
})

describe('getNumberOfInvoices function', () => {
  it('should return No Invoices when the invoices array is empty', () => {
    const invoices = []
    expect(getNumberOfInvoices(invoices.length)).toBe('No invoices')
  })

  it('should return There is 1 invoices when the invoices array is not empty', () => {
    const invoices = ['one']
    expect(getNumberOfInvoices(invoices.length)).toBe('There is 1 total invoice')
  })

  it('should return There are n invoices when the invoices array is not empty', () => {
    const invoices = ['one', 'two']
    expect(getNumberOfInvoices(invoices.length)).toBe('There are 2 total invoices')
  })
})
