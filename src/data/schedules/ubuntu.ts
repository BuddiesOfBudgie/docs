import { CalendarEventCategory, CalendarEventType, CalendarSchedule } from '../../types'

export const UbuntuReleaseSchedule: CalendarSchedule = {
  category: CalendarEventCategory.UBUNTU,
  events: [
    {
      dates: '2023-04-27',
      release: '23.10',
      types: [CalendarEventType.START],
      url: 'https://discourse.ubuntu.com/t/mantic-minotaur-release-schedule/34989',
    },
    {
      dates: ['2023-06-29', '2023-07-06'],
      release: '23.10',
      types: [CalendarEventType.TESTING_WEEK],
      url: 'https://discourse.ubuntu.com/t/mantic-minotaur-release-schedule/34989',
    },
    {
      dates: '2023-08-17',
      release: '23.10',
      types: [CalendarEventType.FEATURE_FREEZE, CalendarEventType.IMPORT_FREEZE],
      url: 'https://discourse.ubuntu.com/t/mantic-minotaur-release-schedule/34989',
    },
    {
      dates: ['2023-08-24', '2023-08-31'],
      release: '23.10',
      types: [CalendarEventType.TESTING_WEEK],
      url: 'https://discourse.ubuntu.com/t/mantic-minotaur-release-schedule/34989',
    },
    {
      dates: ['2023-09-18', '2023-09-21'],
      release: '23.10',
      types: [CalendarEventType.BETA_FREEZE],
      url: 'https://discourse.ubuntu.com/t/mantic-minotaur-release-schedule/34989',
    },
    {
      dates: '2023-09-21',
      release: '23.10',
      types: [CalendarEventType.BETA_RELEASE],
      url: 'https://discourse.ubuntu.com/t/mantic-minotaur-release-schedule/34989',
    },
    {
      dates: ['2023-10-05', '2023-10-12'],
      release: '23.10',
      types: [CalendarEventType.FINAL_FREEZE],
      url: 'https://discourse.ubuntu.com/t/mantic-minotaur-release-schedule/34989',
    },
    {
      dates: '2023-10-12',
      release: '23.10',
      types: [CalendarEventType.RELEASE],
      url: 'https://discourse.ubuntu.com/t/mantic-minotaur-release-schedule/34989',
    },
  ],
}
