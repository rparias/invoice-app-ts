import { Box, Button, Text, TextInput } from 'grommet'

import { Trash } from 'grommet-icons'

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
        size="medium"
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
        size="medium"
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
        size="medium"
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

export { columns, dropDownOptions, tableData }
