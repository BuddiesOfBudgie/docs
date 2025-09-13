import BrowserOnly from '@docusaurus/BrowserOnly'
import { Stack } from '@mui/material'
import { ThirdPartyReleaseContextProvider } from '@site/src/hooks/useThirdPartyReleaseContext'
import React from 'react'
import ThirdPartyReleaseFilters from './ThirdPartyReleaseFilters'
import ThirdPartyReleaseTable from './ThirdPartyReleaseTable'

const ThirdPartyReleaseContainer = () => {
  return (
    <BrowserOnly
      children={() => (
        <ThirdPartyReleaseContextProvider>
          <Stack gap={4}>
            <ThirdPartyReleaseFilters />
            <ThirdPartyReleaseTable />
          </Stack>
        </ThirdPartyReleaseContextProvider>
      )}
    />
  )
}

export default ThirdPartyReleaseContainer
