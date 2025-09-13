import { mkdirSync, writeFileSync } from 'fs'
import type { DateArray, EventAttributes } from 'ics'
import { createEvents } from 'ics'
import { join } from 'path'
import { UnifiedReleaseSchedules } from '../data/schedules/unified'

const scheduleToEvents = UnifiedReleaseSchedules.reduce<EventAttributes[]>(
  (acc, { category, dates, name: title, types, url }) => {
    const startDate = new Date(dates[0])
    const start: DateArray = [startDate.getFullYear(), startDate.getMonth() + 1, startDate.getDate()]
    const end: DateArray = [start[0], start[1], start[2] + 1]

    const attr: EventAttributes = {
      calName: 'Buddies of Budgie: Third-party Project Schedules',
      categories: [category, ...types],
      classification: 'public',
      end,
      endInputType: 'utc',
      start,
      startInputType: 'utc',
      status: 'CONFIRMED',
      title,
      url,
    }

    return [...acc, attr]
  },
  []
)

const { error, value } = createEvents(scheduleToEvents)
const folderPath = join(process.cwd(), 'static', 'calendars')
mkdirSync(folderPath, { recursive: true })
const fsPath = join(folderPath, 'third-party-schedules.ics')
if (!error) writeFileSync(fsPath, value)
if (error) console.error(error)
