import { screen, render } from '@testing-library/react'
import ViewInvoice from './ViewInvoice'

describe('ViewInvoice page', () => {
  it('should render the status of the invoice', () => {
    const props = {
      id: '',
      date: '',
      name: '',
      price: 0,
      status: 'pending'
    }
    render(<ViewInvoice invoice={props} />)

    expect(screen.getByLabelText('Status')).toHaveTextContent('pending')
  })
})
