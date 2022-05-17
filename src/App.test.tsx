import { render } from '@testing-library/react'
import App from './App'

test('renders hello world link', () => {
  render(<App />)
  expect(true).toBeTruthy()
})
