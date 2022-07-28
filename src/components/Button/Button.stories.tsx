import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Mark as Paid'
}

export const Danger = Template.bind({})
Danger.args = {
  label: 'Delete',
  className: 'danger'
}

export const White = Template.bind({})
White.args = {
  label: 'Edit',
  className: 'white'
}

export const Black = Template.bind({})
Black.args = {
  label: 'Edit',
  className: 'black'
}

export const GrayLight = Template.bind({})
GrayLight.args = {
  label: 'Save as Draft',
  className: 'gray-light'
}

export const GrayDark = Template.bind({})
GrayDark.args = {
  label: 'Save as Draft',
  className: 'gray-dark'
}

export const Large = Template.bind({})
Large.args = {
  label: '+ Add New Item',
  className: 'white large'
}
