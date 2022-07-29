import React from 'react'

import { Close } from 'grommet-icons'

import { Box, Button, FormField, Heading, Layer, Select, TextArea, TextInput } from 'grommet'

type Props = {
  onClose: () => void
}

const suggestions = ['alpha', 'beta']

const Form: React.FC<Props> = ({ onClose }): JSX.Element => {
  const [select, setSelect] = React.useState('')

  return (
    <Layer position="left" full="vertical" modal onClickOutside={onClose} onEsc={onClose}>
      <Box as="form" fill="vertical" overflow="auto" width="medium" pad="medium" onSubmit={onClose}>
        <Box flex={false} direction="row" justify="between">
          <Heading level={2} margin="none">
            Add
          </Heading>
          <Button icon={<Close />} onClick={onClose} />
        </Box>
        <Box flex="grow" overflow="auto" pad={{ vertical: 'medium' }}>
          <FormField label="First">
            <TextInput suggestions={suggestions} />
          </FormField>
          <FormField label="Second">
            <Select
              options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
              value={select}
              onChange={({ option }) => setSelect(option)}
            />
          </FormField>
          <FormField label="Third">
            <TextArea />
          </FormField>
        </Box>
        <Box flex={false} as="footer" align="start">
          <Button type="submit" label="Submit" onClick={onClose} primary />
        </Box>
      </Box>
    </Layer>
  )
}

export default Form
