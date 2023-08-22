import { CalendarEventCategory, CalendarEventType, CalendarSchedule } from "../../types";

export const GnomeReleaseSchedule: CalendarSchedule = {
  category: CalendarEventCategory.GNOME,
  events: [
    {
      dates: "2023-07-01",
      release: "45",
      types: [CalendarEventType.ALPHA],
      url: "https://wiki.gnome.org/FortyFive",
    },
    {
      dates: "2023-08-05",
      release: "45",
      types: [CalendarEventType.ABI_FREEZE, CalendarEventType.BETA_RELEASE],
      url: "https://wiki.gnome.org/FortyFive",
    },
    {
      dates: "2023-09-02",
      release: "45",
      types: [CalendarEventType.RELEASE_CANDIDATE],
      url: "https://wiki.gnome.org/FortyFive",
    },
    {
      dates: "2023-09-20",
      release: "45",
      types: [CalendarEventType.RELEASE],
      url: "https://wiki.gnome.org/FortyFive",
    },
  ],
};
