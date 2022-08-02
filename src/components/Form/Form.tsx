import React from 'react'

import { Close, Trash } from 'grommet-icons'

import {
  Box,
  Button,
  DataTable,
  DateInput,
  FormField,
  Heading,
  Layer,
  Select,
  Text,
  TextInput
} from 'grommet'

type Props = {
  onClose: () => void
}

const dropDownOptions = ['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days']

const tableData = [
  {
    itemName: 'Banner Design',
    quantity: 1,
    price: 156,
    total: 156
  },
  {
    itemName: 'Email Design',
    quantity: 1,
    price: 200,
    total: 200
  }
]

const columns = [
  {
    property: 'itemName',
    header: <Text>Item Name</Text>,
    render: ({ itemName }: { itemName: string }) => (
      <TextInput
        placeholder="Item Name"
        value={itemName}
        onChange={(event) => console.log(event.target.value)}
      />
    )
  },
  {
    property: 'quantity',
    header: <Text>Qty.</Text>,
    render: ({ quantity }: { quantity: number }) => (
      <TextInput
        type="number"
        placeholder="Qty."
        value={quantity}
        onChange={(event) => console.log(event.target.value)}
      />
    )
  },
  {
    property: 'price',
    header: <Text>Price</Text>,
    render: ({ price }: { price: number }) => (
      <TextInput
        type="number"
        placeholder="Price"
        value={price.toFixed(2)}
        onChange={(event) => console.log(event.target.value)}
      />
    )
  },
  {
    property: 'total',
    header: <Text>Total</Text>,
    render: ({ total }: { total: number }) => (
      <Box direction="row-responsive" justify="between" align="center">
        <Text color="#888EB0">{total.toFixed(2)}</Text>
        <Button icon={<Trash />} onClick={() => console.log('delete')} />
      </Box>
    )
  }
]

const Form: React.FC<Props> = ({ onClose }): JSX.Element => {
  const [select, setSelect] = React.useState(dropDownOptions[0])
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <Layer position="left" full="vertical" modal onClickOutside={onClose} onEsc={onClose}>
      <Box as="form" fill="vertical" overflow="auto" width="large" pad="medium" onSubmit={onClose}>
        <Box flex={false} direction="row" justify="between">
          <Heading level={1} margin="none">
            New Invoice
          </Heading>
          <Button icon={<Close />} onClick={onClose} />
        </Box>
        <Heading level={4} color="#7c5dfa">
          Bill From
        </Heading>
        <Box flex="grow" overflow="auto">
          <FormField htmlFor="street-address-id" name="street-address" label="Street Address">
            <TextInput
              id="street-address-id"
              name="street-address"
              placeholder="Enter a street address"
              size="medium"
              ref={inputRef}
            />
          </FormField>
          <Box direction="row-responsive" justify="between">
            <FormField htmlFor="city-id" name="city" label="City">
              <TextInput id="city-id" name="city" placeholder="Enter a city" size="medium" />
            </FormField>
            <FormField htmlFor="post-code-id" name="post-code" label="Post Code">
              <TextInput
                id="post-code-id"
                name="post-code"
                placeholder="Enter a post code"
                size="medium"
              />
            </FormField>
            <FormField htmlFor="country-id" name="country" label="Country">
              <TextInput
                id="country-id"
                name="country"
                placeholder="Enter a country"
                size="medium"
              />
            </FormField>
          </Box>
          <Heading level={4} color="#7c5dfa">
            Bill To
          </Heading>
          <FormField htmlFor="client-name-id" name="client-name" label="Client's Name">
            <TextInput
              id="client-name-id"
              name="client-name"
              placeholder="Enter a client's name"
              size="medium"
            />
          </FormField>
          <FormField htmlFor="client-email-id" name="client-email" label="Client's Email">
            <TextInput
              id="client-email-id"
              name="client-email"
              placeholder="Enter a client's email"
              size="medium"
              type="email"
            />
          </FormField>
          <FormField
            htmlFor="client-street-address-id"
            name="client-street-address"
            label="Street Address"
          >
            <TextInput
              id="client-street-address-id"
              name="client-street-address"
              placeholder="Enter a street address"
              size="medium"
            />
          </FormField>
          <Box direction="row-responsive" justify="between">
            <FormField htmlFor="client-city-id" name="client-city" label="City">
              <TextInput
                id="client-city-id"
                name="client-city"
                placeholder="Enter a city"
                size="medium"
              />
            </FormField>
            <FormField htmlFor="client-post-code-id" name="client-post-code" label="Post Code">
              <TextInput
                id="client-post-code-id"
                name="client-post-code"
                placeholder="Enter a post code"
                size="medium"
              />
            </FormField>
            <FormField htmlFor="client-country-id" name="client-country" label="Country">
              <TextInput
                id="client-country-id"
                name="client-country"
                placeholder="Enter a country"
                size="medium"
              />
            </FormField>
          </Box>
          <Box direction="row-responsive" justify="between">
            <FormField htmlFor="invoice-date-id" name="invoice-date" label="Invoice Date">
              <DateInput
                id="invoice-date-id"
                format="mm/dd/yyyy"
                size="medium"
                value={new Date().toISOString()}
                onChange={({ value }) => {
                  console.log(value)
                }}
              />
            </FormField>
            <FormField htmlFor="payment-terms-id" name="payment-terms" label="Payment Terms">
              <Select
                id="payment-terms-id"
                size="medium"
                options={dropDownOptions}
                value={select}
                onChange={({ option }) => setSelect(option)}
              />
            </FormField>
          </Box>
          <FormField
            htmlFor="project-description-id"
            name="project-description"
            label="Project Description"
          >
            <TextInput
              id="project-description-id"
              name="project-description"
              placeholder="Enter a project description"
              size="medium"
            />
          </FormField>
        </Box>
        <Box flex="grow" overflow="auto">
          <Text color="#777F98" weight="bold" margin={{ vertical: 'medium' }}>
            Item List
          </Text>
        </Box>
        <Box align="center">
          <DataTable columns={columns} data={tableData} sortable size="medium" />
        </Box>
        {/* <Box flex={false} as="footer" align="start">
          <Button type="submit" label="Submit" onClick={onClose} primary />
        </Box> */}
      </Box>
    </Layer>
  )
}

export default Form
