import { CalendarEventCategory, CalendarEventType, CalendarSchedule } from "../..//types";

export const FedoraReleaseSchedule: CalendarSchedule = {
  category: CalendarEventCategory.FEDORA,
  events: [
    {
      dates: "2023-02-07",
      release: "39",
      types: [CalendarEventType.START],
      url: "https://fedorapeople.org/groups/schedule/f-39/f-39-key-tasks.html",
    },
    {
      dates: "2023-08-08",
      release: "39",
      types: [CalendarEventType.BRANCHING, CalendarEventType.CHANGE_CHECKPOINT_TESTABLE],
      url: "https://fedorapeople.org/groups/schedule/f-39/f-39-key-tasks.html",
    },
    {
      dates: ["2023-08-08", "2023-08-11"],
      release: "39",
      types: [CalendarEventType.BRANCH_FREEZE],
      url: "https://fedorapeople.org/groups/schedule/f-39/f-39-key-tasks.html",
    },
    {
      dates: "2023-08-22",
      release: "39",
      types: [CalendarEventType.CODE_COMPLETE_DEADLINE],
      url: "https://fedorapeople.org/groups/schedule/f-39/f-39-key-tasks.html",
    },
    {
      dates: ["2023-08-22", "2023-09-12"],
      release: "39",
      types: [CalendarEventType.BETA_FREEZE],
      url: "https://fedorapeople.org/groups/schedule/f-39/f-39-key-tasks.html",
    },
    {
      dates: "2023-09-12",
      release: "39",
      types: [CalendarEventType.BETA_RELEASE],
      url: "https://fedorapeople.org/groups/schedule/f-39/f-39-key-tasks.html",
    },
    {
      dates: ["2023-10-03", "2023-10-17"],
      release: "39",
      types: [CalendarEventType.FINAL_FREEZE],
      url: "https://fedorapeople.org/groups/schedule/f-39/f-39-key-tasks.html",
    },
    {
      dates: "2023-10-17",
      release: "39",
      types: [CalendarEventType.RELEASE],
      url: "https://fedorapeople.org/groups/schedule/f-39/f-39-key-tasks.html",
    },
    {
      dates: "2023-11-14",
      release: "37",
      types: [CalendarEventType.EOL],
      url: "https://fedorapeople.org/groups/schedule/f-39/f-39-key-tasks.html",
    },
    {
      dates: "2023-08-08",
      release: "40",
      types: [CalendarEventType.BRANCHING],
      url: "https://fedorapeople.org/groups/schedule/f-40/f-40-key-tasks.html",
    },
    {
      dates: "2023-12-26",
      release: "40",
      types: [CalendarEventType.CHANGE_CHECKPOINT_SELF_CONTAINED],
      url: "https://fedorapeople.org/groups/schedule/f-40/f-40-key-tasks.html",
    },
    {
      dates: "2024-02-06",
      release: "40",
      types: [CalendarEventType.BRANCHING, CalendarEventType.CHANGE_CHECKPOINT_TESTABLE],
      url: "https://fedorapeople.org/groups/schedule/f-40/f-40-key-tasks.html",
    },
    {
      dates: "2024-02-20",
      release: "40",
      types: [CalendarEventType.BRANCHING, CalendarEventType.CODE_COMPLETE_DEADLINE],
      url: "https://fedorapeople.org/groups/schedule/f-40/f-40-key-tasks.html",
    },
    {
      dates: ["2024-02-20", "2024-03-12"],
      release: "40",
      types: [CalendarEventType.BETA_FREEZE],
      url: "https://fedorapeople.org/groups/schedule/f-40/f-40-key-tasks.html",
    },
    {
      dates: "2024-03-12",
      release: "40",
      types: [CalendarEventType.BETA_RELEASE],
      url: "https://fedorapeople.org/groups/schedule/f-40/f-40-key-tasks.html",
    },
    {
      dates: ["2024-04-02", "2024-04-16"],
      release: "40",
      types: [CalendarEventType.FINAL_FREEZE],
      url: "https://fedorapeople.org/groups/schedule/f-40/f-40-key-tasks.html",
    },
    {
      dates: "2024-04-02",
      release: "40",
      types: [CalendarEventType.RELEASE],
      url: "https://fedorapeople.org/groups/schedule/f-40/f-40-key-tasks.html",
    },
    {
      dates: "2024-05-14",
      release: "38",
      types: [CalendarEventType.EOL],
      url: "https://fedorapeople.org/groups/schedule/f-40/f-40-key-tasks.html",
    },
  ],
};
