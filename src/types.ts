import { ComponentType, SVGProps } from "react";

export enum WebsiteType {
  GITHUB,
  MASTODON,
  PATREON,
  TWITTER,
  WEBSITE,
  YOUTUBE,
}

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
