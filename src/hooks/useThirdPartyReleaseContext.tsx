import { A, F, pipe } from '@mobily/ts-belt'
import { DateTime, Interval } from 'luxon'
import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react'
import { UnifiedReleaseSchedules } from '../data/schedules/unified'
import { CalendarEventCategory, CalendarEventStrictType, CalendarEventType } from '../types'

type ThirdPartyReleaseState = {
  firstUpcomingEvent: CalendarEventStrictType
  filteredEvents: CalendarEventStrictType[]
  showFilters: boolean
  setShowFilters: (value: boolean) => void
  showPastEvents: boolean
  setShowPastEvents: (value: boolean) => void
  selectedCategories: CalendarEventCategory[]
  setSelectedCategories: (values: CalendarEventCategory[]) => void
  selectedTypes: CalendarEventType[]
  setSelectedTypes: (values: CalendarEventType[]) => void
}

const ThirdPartyReleaseContext = createContext<ThirdPartyReleaseState | null>(null)

type ThirdPartyReleaseContextProviderProps = {
  children: ReactNode
}

export const ThirdPartyReleaseContextProvider = ({ children }: ThirdPartyReleaseContextProviderProps) => {
  const [showFilters, setShowFilters] = useState(false)
  const [showPastEvents, setShowPastEvents] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState<CalendarEventCategory[]>(
    Object.values(CalendarEventCategory)
  )
  const [selectedTypes, setSelectedTypes] = useState<CalendarEventType[]>(Object.values(CalendarEventType))

  const today = useMemo(() => DateTime.now().setZone('utc', { keepLocalTime: true }).startOf('day'), [])

  const filteredEvents = useMemo(
    () =>
      pipe(
        UnifiedReleaseSchedules.reduce<CalendarEventStrictType[]>(
          (acc, e) => [...acc, ...e.types.map((t) => ({ ...e, type: t }))],
          []
        ),
        A.filter((e) => selectedCategories.includes(e.category)),
        A.filter((e) => selectedTypes.includes(e.type)),
        A.filter((e) => (showPastEvents ? true : DateTime.fromISO(e.dates[0]).diff(today).milliseconds > 0)),
        F.coerce<CalendarEventStrictType[]>
      ),
    [selectedCategories, selectedTypes, showPastEvents, today]
  )

  const firstUpcomingEvent = filteredEvents.find((e) => {
    const startDate = DateTime.fromISO(e.dates[0])
    const endDate = DateTime.fromISO(e.dates[1]).plus({ days: e.dates[0] === e.dates[0] ? 1 : 0 })
    const diff = Interval.fromDateTimes(startDate, endDate)

    const currentOrUpcoming = diff.contains(today) || startDate.diff(today).milliseconds > 0
    return currentOrUpcoming
  })

  return (
    <ThirdPartyReleaseContext.Provider
      value={{
        firstUpcomingEvent,
        filteredEvents,
        showFilters,
        showPastEvents,
        selectedCategories,
        selectedTypes,
        setShowFilters,
        setShowPastEvents,
        setSelectedCategories,
        setSelectedTypes,
      }}
    >
      {children}
    </ThirdPartyReleaseContext.Provider>
  )
}

export const useThirdPartyReleaseContext = () => {
  const ctx = useContext(ThirdPartyReleaseContext)
  return ctx
}
