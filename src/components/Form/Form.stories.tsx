import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Add } from 'grommet-icons'
import { Box, Button } from 'grommet'
import Form from './Form'

export default {
  title: 'Example/Form',
  component: Form
} as ComponentMeta<typeof Form>

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Form> = (args) => {
  const [open, setOpen] = React.useState(false)

  const onOpen = (): void => setOpen(true)

  const onClose = (): void => setOpen(false)

  return (
    <Box fill align="center" justify="center">
      <Button icon={<Add />} label="Add" onClick={onOpen} />
      {open && <Form {...args} onClose={onClose} />}
    </Box>
  )
}

export const Default = Template.bind({})
