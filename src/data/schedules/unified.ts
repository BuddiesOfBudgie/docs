// This file contains a schedule of various important dates for distributors of Budgie Desktop

import { CalendarEventStrictDate } from "../../types";
import { FedoraReleaseSchedule } from "./fedora";
import { GnomeReleaseSchedule } from "./gnome";
import { UbuntuReleaseSchedule } from "./ubuntu";

export const UnifiedReleaseSchedules = (() => {
  const schedules = [FedoraReleaseSchedule, GnomeReleaseSchedule, UbuntuReleaseSchedule];
  return schedules
    .reduce<CalendarEventStrictDate[]>((acc, s) => {
      const eventsWithInternalName = s.events.reduce<CalendarEventStrictDate[]>(
        (acc, e) => [
          ...acc,
          {
            ...e,
            category: s.category,
            dates: Array.isArray(e.dates) ? e.dates : [e.dates, e.dates],
            name: `${s.category} ${e.release} (${e.types.join(", ")})`,
          },
        ],
        []
      );

      return [...acc, ...eventsWithInternalName];
    }, [])
    .sort((a, b) => a.dates[0].localeCompare(b.dates[0]));
})();
