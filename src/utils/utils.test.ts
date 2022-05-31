import { returnFirstWord } from './utils'

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
