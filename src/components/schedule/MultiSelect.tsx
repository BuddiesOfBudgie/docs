import { Autocomplete, Box, Chip, TextField } from '@mui/material'
import React from 'react'

interface MultiSelectProps<T> {
  defaultValues: T[]
  id: string
  label: string
  onChange: (values: T[]) => void
  options: T[]
}

export const MultiSelect = <T,>({ defaultValues, id, label, onChange, options }: MultiSelectProps<T>) => {
  return (
    <Autocomplete
      defaultValue={defaultValues}
      id={id}
      multiple
      onChange={(_, v) => {
        onChange(v)
      }}
      options={options}
      renderInput={(params) => <TextField {...params} variant="standard" label={label} />}
      renderTags={(selected, getTagProps) => {
        return (
          <Box sx={{ paddingBlock: 1 }}>
            {selected.map((value, index) => (
              <Chip key={value} label={value as string} {...getTagProps({ index })} />
            ))}
          </Box>
        )
      }}
    />
  )
}
