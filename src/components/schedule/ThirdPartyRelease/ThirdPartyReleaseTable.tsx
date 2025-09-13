import { Stack, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material'
import React from 'react'

import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import { useThirdPartyReleaseContext } from '@site/src/hooks/useThirdPartyReleaseContext'
import { DateTime, Interval } from 'luxon'
import { CategoryChip } from './CategoryChip'
import { EventTypeToIcon } from './EventTypeToIcon'

const ThirdPartyReleaseTable = () => {
  const { filteredEvents, firstUpcomingEvent, showPastEvents } = useThirdPartyReleaseContext()

  return (
    <Stack gap={4}>
      <TableContainer>
        <TableHead>
          <StyledTableRow>
            <TableCell>
              <Translate id="event">Event</Translate>
            </TableCell>
            <TableCell>
              <Translate id="project">Project</Translate>
            </TableCell>
            <TableCell>
              <Translate id="start">Start</Translate>
            </TableCell>
            <TableCell>
              <Translate id="end">End</Translate>
            </TableCell>
            <TableCell>
              <Translate id="duration">Duration</Translate>
            </TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {filteredEvents.map((e, i) => {
            const startDate = DateTime.fromISO(e.dates[0])
            const endDate = DateTime.fromISO(e.dates[1]).plus({ days: e.dates[0] === e.dates[0] ? 1 : 0 })
            const diff = Interval.fromDateTimes(startDate, endDate)
            const duration = diff.toDuration('days').toHuman({ unitDisplay: 'narrow' })

            return (
              <>
                {showPastEvents && firstUpcomingEvent?.name === e.name && (
                  <TableRow className="upcomingEventRow" sx={{ backgroundColor: 'success' }} key="upcomingEventRow">
                    <TableCell colSpan={5} sx={{ backgroundColor: 'success' }}>
                      <Typography fontWeight="bold" textAlign="center">
                        Current or upcoming
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
                <StyledTableRow key={`${e.name}-${i}`}>
                  <TableCell>
                    <Stack gap={2}>
                      <Stack alignItems="center" direction="row" gap={1}>
                        <EventTypeToIcon t={e.type} />
                        <Link to={e.url} target="_blank">
                          <Translate
                            id="evenTableCellescription"
                            values={{
                              rel: `${e.category} ${e.release}`,
                              type: e.type,
                            }}
                          >
                            {'{type} for {rel}'}
                          </Translate>
                        </Link>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <CategoryChip c={e.category} />
                  </TableCell>
                  <TableCell>{e.dates[0]}</TableCell>
                  <TableCell>{e.dates[1]}</TableCell>
                  <TableCell>{duration}</TableCell>
                </StyledTableRow>
              </>
            )
          })}
        </TableBody>
      </TableContainer>
    </Stack>
  )
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export default ThirdPartyReleaseTable
