import React, { useState } from 'react'
import { FormDown } from 'grommet-icons'
import { Box, CheckBoxGroup, DropButton, Text } from 'grommet'

interface DropProps {
  top?: 'top' | 'bottom'
  bottom?: 'top' | 'bottom'
  right?: 'left' | 'right'
  left?: 'left' | 'right'
}

const Filter: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const align: DropProps = { top: 'bottom' }

  return (
    <DropButton
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      dropProps={{ align }}
      dropContent={
        <Box pad="medium">
          <CheckBoxGroup
            options={['First', 'Second', 'Third']}
            onChange={(event) => {
              const value: string | string[] = event?.value || []
              const filters: string[] = typeof value === 'string' ? [] : value
              setSelectedFilters(filters)
            }}
            value={selectedFilters}
          />
        </Box>
      }
    >
      <Box direction="row" gap="medium" align="center" pad="small">
        <Text>Filter by status</Text>
        <FormDown color="brand" />
      </Box>
    </DropButton>
  )
}

export default Filter
