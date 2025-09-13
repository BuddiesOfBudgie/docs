import { Avatar, Chip, useColorScheme } from '@mui/material'
import { CalendarEventCategory } from '@site/src/types'
import React from 'react'

export const CategoryChip = ({ c }: { c: CalendarEventCategory }) => {
  const { mode } = useColorScheme()
  return (
    <Chip
      avatar={<Avatar alt={c} src={`/img/logos/${c.toLowerCase()}.svg`} />}
      label={c}
      sx={{
        '.MuiChip-avatar': {
          filter: c === CalendarEventCategory.GNOME && mode === 'dark' ? 'invert(1) brightness(1)' : undefined,
        },
        width: 'max-content',
      }}
    />
  )
}
