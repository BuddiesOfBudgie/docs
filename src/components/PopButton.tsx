import { Button, type ButtonProps } from '@mui/material'
import React from 'react'

export const PopButton = ({ sx, ...rest }: ButtonProps) => {
  return <Button sx={{ ...sx, fontFamily: 'Poppins' }} {...rest}></Button>
}
