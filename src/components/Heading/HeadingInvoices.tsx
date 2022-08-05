import React from 'react'
import { Box, Heading, Text } from 'grommet'
import { Filter as FilterByStatus } from '../Filter'
import { HeadingContainer } from './styles'
import { useWindowSize, useAppDispatch } from '../../hooks'
import { getNumberOfInvoices, returnFirstWord } from '../../utils'
import { ButtonWithIcon } from '../ButtonWithIcon'
import { open } from '../../state/reducers/formSlice'

type Props = {
  numberOfInvoices: number
}

const HeadingInvoices: React.FC<Props> = ({ numberOfInvoices }): JSX.Element => {
  const labelText = 'New Invoice'
  const { width } = useWindowSize()
  const dispatch = useAppDispatch()

  return (
    <HeadingContainer>
      <Box>
        <Heading level={1}>Invoices</Heading>
        <Text color="dark-4">{getNumberOfInvoices(numberOfInvoices)}</Text>
      </Box>
      <Box direction="row">
        <FilterByStatus />
        <ButtonWithIcon
          label={width >= 768 ? labelText : returnFirstWord(labelText)}
          onClick={() => dispatch(open())}
        />
      </Box>
    </HeadingContainer>
  )
}

export default HeadingInvoices
