import React from 'react'
import { Box, Text } from 'grommet'
import { useNavigate } from 'react-router-dom'
import { InvoiceContainer } from './styles'
import { InvoiceStatus } from '../InvoiceStatus'
import { Invoice as InvoiceProps } from '../../types'
import { ReactComponent as ArrowRight } from '../../assets/icon-arrow-right.svg'

const Invoice: React.FC<InvoiceProps> = ({ id, date, name, price, status }): JSX.Element => {
  const navigate = useNavigate()

  const handleOnClick = (): void => {
    navigate(`/invoice/${id}`)
  }
  return (
    <Box
      background={{ dark: 'dark-3', light: '#fff' }}
      width="100%"
      round="small"
      elevation="xsmall"
      style={{ padding: '0 2rem' }}
    >
      <InvoiceContainer onClick={handleOnClick}>
        <div className="invoice__header">
          <Text color="dark-3" weight="bold">
            #
          </Text>
          <Text a11yTitle="Invoice Id" gridArea="id" weight="bold">
            {id}
          </Text>
        </div>
        <div>
          <Text color="dark-6">Due </Text>
          <Text a11yTitle="Invoice date" gridArea="date" color="dark-3">
            {date}
          </Text>
        </div>
        <Text a11yTitle="Invoice name" gridArea="name" color="dark-6" className="invoice__header">
          {name}
        </Text>
        <Text a11yTitle="Invoice price" className="price" gridArea="price" weight="bold">
          {`$${price.toFixed(2)}`}
        </Text>
        <div className="invoice__status">
          <InvoiceStatus status={status} />
          <ArrowRight />
        </div>
      </InvoiceContainer>
    </Box>
  )
}

export default Invoice
