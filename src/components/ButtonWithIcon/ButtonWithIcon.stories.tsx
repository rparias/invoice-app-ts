import { ComponentStory, ComponentMeta } from '@storybook/react'

import ButtonWithIcon from './ButtonWithIcon'

export default {
  title: 'Example/ButtonWithIcon',
  component: ButtonWithIcon
} as ComponentMeta<typeof ButtonWithIcon>

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof ButtonWithIcon> = (args) => <ButtonWithIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'New Invoice'
}
