import { Box, Grid, Stack } from '@mui/material'

import Link from '@docusaurus/Link'

type CategoryProps = {
  icon: JSX.Element
  text: JSX.Element
  to: string
}

export const Category = ({ icon, text, to }: CategoryProps) => {
  return (
    <Grid className="Category" size={4}>
      <Box className="card shadow--lw" sx={{ p: 6 }}>
        <Stack alignItems="center" gap={2}>
          {icon}
          <Link to={to}>
            <h3 style={{ fontWeight: 'bold' }}>{text}</h3>
          </Link>
        </Stack>
      </Box>
    </Grid>
  )
}
