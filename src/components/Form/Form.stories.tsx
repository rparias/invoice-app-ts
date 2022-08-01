import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Add } from 'grommet-icons'
import { Box, Button, Grommet } from 'grommet'
import theme from '../../grommet-styles/global-styles'
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
    <Grommet theme={theme}>
      <Box fill align="center" justify="center">
        <Button icon={<Add />} label="Add" onClick={onOpen} />
        {open && <Form {...args} onClose={onClose} />}
      </Box>
    </Grommet>
  )
}

export const Default = Template.bind({})
