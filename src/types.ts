import { ComponentType, SVGProps } from "react";

export enum CalendarEventCategory {
  DEBIAN = "Debian",
  FEDORA = "Fedora",
  GNOME = "GNOME",
  SOLUS = "Solus",
  UBUNTU = "Ubuntu",
}

export enum CalendarEventType {
  ABI_FREEZE = "ABI Freeze",
  ALPHA = "Alpha",
  BETA_FREEZE = "Beta Freeze",
  BETA_RELEASE = "Beta Release",
  BRANCHING = "Branching",
  BRANCH_FREEZE = "Branch Freeze",
  CHANGE_CHECKPOINT_SELF_CONTAINED = "Change Checkpoint (Self-Contained)",
  CHANGE_CHECKPOINT_TESTABLE = "Change Checkpoint (Testable)",
  CODE_COMPLETE_DEADLINE = "Code Completion Deadline",
  EOL = "End-of-life",
  FEATURE_FREEZE = "Feature Freeze",
  FINAL_FREEZE = "Final Freeze",
  IMPORT_FREEZE = "Import Freeze",
  RELEASE = "Release",
  RELEASE_CANDIDATE = "Release Candidate",
  START = "Start of Development",
  TESTING_WEEK = "Testing Week",
}

export enum WebsiteType {
  GITHUB,
  MASTODON,
  PATREON,
  TWITTER,
  WEBSITE,
  YOUTUBE,
}

export type CalendarEvent = {
  dates: string | [string, string];
  release: string;
  types: CalendarEventType[];
  url: string;
};

export type CalendarEventStrictDate = {
  category: CalendarEventCategory;
  dates: [string, string];
  name: string; // Internal event name used in generation
} & Omit<CalendarEvent, "dates">;

export type CalendarEventStrictType = {
  type: CalendarEventType;
} & Omit<CalendarEventStrictDate, "types">;

export type CalendarSchedule = {
  category: CalendarEventCategory;
  events: CalendarEvent[];
};

export type Person = {
  description: () => JSX.Element;
  matrix?: string;
  names: PersonName;
  websites: PersonWebsite[];
};

export type PersonName = {
  first: string;
  last: string;
};

export type PersonWebsite = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  to: string;
  type: WebsiteType;
};

type SupportInfoShared = {
  // budgieAvailablePostInstall is the version number that is available after upgrade upon installation
  // This should be null if it is the same as budgieVersion
  budgieAvailablePostInstall: string | null;

  // budgieVersion is the version number that is available in the live media, if any
  budgieVersion: string;

  // name of the operating system
  name: string;

  // showInGrid is used to determine if this should be shown in our grid with no added instructions
  // if set to false,
  showInGrid: boolean;

  // website is the website of the operating system or direct download if no site is available
  website: string;
};

export type SupportLiveMediaInfo = {
  installationInfo?: () => JSX.Element;
  summary: () => JSX.Element;
  showInGrid: true;
} & SupportInfoShared;

export type SupportManualInstallationInfo = {
  installationInfo: () => JSX.Element;
  summary?: () => JSX.Element;
  showInGrid: false;
} & SupportInfoShared;

export type SupportInfo = SupportLiveMediaInfo | SupportManualInstallationInfo;

export type Team = {
  description: string;
  members: [string, null | string][];
  name: string;
};
