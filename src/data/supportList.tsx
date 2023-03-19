import React from "react";
import { SupportInfo } from "../types";

import Admonition from "@theme/Admonition";
import Translate from "@docusaurus/Translate";
import { Stack } from "@mui/material";

import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export const SupportListData: SupportInfo[] = [
  {
    budgieAvailablePostInstall: null,
    budgieVersion: "10.7.1",
    installationInfo: () => (
      <Admonition icon="🚧" type="note" title="Coming Soon">
        Installation instructions coming soon!
      </Admonition>
    ),
    name: "Arch Linux",
    showInGrid: false,
    website: "https://archlinux.org",
  },
  {
    budgieAvailablePostInstall: null,
    budgieVersion: "10.7.1",
    name: "EndeavourOS",
    showInGrid: true,
    summary: () => (
      <Translate id="get.budgie.endeavouros.summary" description="Summary of EndeavourOS">
        EndeavourOS is a terminal-centric distro built on top of Arch Linux. EndeavourOS offers through their unified
        installer the ability to install Budgie Desktop, with user choice on their desired experience.
      </Translate>
    ),
    website: "https://endeavouros.com",
  },
  {
    budgieAvailablePostInstall: null,
    budgieVersion: "10.7.1",
    name: "Fedora Budgie Spin",
    showInGrid: true,
    summary: () => (
      <Translate id="get.budgie.fedorabudgiespin.summary" description="Summary of Fedora Budgie Spin">
        Fedora Budgie Spin offers a near-stock Budgie Desktop experience on top of the Fedora open source platform.
      </Translate>
    ),
    website: "https://spins.fedoraproject.org/prerelease",
  },
  {
    budgieAvailablePostInstall: "10.7.1",
    budgieVersion: "10.6.4",
    installationInfo: () => (
      <Stack gap={2}>
        Manjaro Budgie Community Edition offers Budgie Desktop as an out-of-the-box experience on top of Manjaro.
        Manjaro is based on Arch Linux.
        <Admonition icon="🚧" type="caution">
          The Budgie Desktop experience offered by this edition is incomplete, setting no default theme or enabling our
          built-in theme. This results in a partially broken user experience.
        </Admonition>
      </Stack>
    ),
    name: "Manjaro Budgie Community Edition",
    showInGrid: false,
    website: "https://manjaro.org",
  },
  {
    budgieAvailablePostInstall: null,
    budgieVersion: "10.7.1",
    installationInfo: () => (
      <Stack gap={2}>
        Budgie Desktop can be installed through the following mechanisms on openSUSE.
        <Tabs>
          <TabItem value="graphical" label="Graphical (Leap 15.4+ and Tumbleweed)">
            Choose the "Budgie Desktop Environment" pattern under the "Desktop Environments" section when searching for
            patterns in YaST Software Management
          </TabItem>

          <TabItem value="installer" label="Installer (Leap 15.4+ and Tumbleweed)">
            At the 'Installation Settings' page, click on "Software" and then choose the "Budgie Desktop Environment"
            pattern under the "Desktop Environments" section when searching for patterns.
          </TabItem>
          <TabItem value="cli" label="CLI">
            <CodeBlock language="bash">sudo zypper install budgie-desktop</CodeBlock>
          </TabItem>
        </Tabs>
      </Stack>
    ),
    name: "OpenSUSE",
    showInGrid: false,
    website: "https://opensuse.org",
  },
  {
    budgieAvailablePostInstall: null,
    budgieVersion: "10.6.4",
    name: "Solus",
    installationInfo: () => (
      <Stack gap={2}>
        <Translate id="get.budgie.solus.summary" description="Summary of Solus">
          Solus offers a curated Budgie Desktop experience on top of its built-from-scratch operating system.
        </Translate>
        <Admonition icon="🚧" type="caution">
          It is currently cautioned against installation of Solus. It may not work out-of-the-box on modern hardware as
          no new release has been made since mid-2021. Additionally, Solus infrastructure has not been operational for
          over two months, resulting in numerous packages remaining out-of-date with security vulnerabilities going
          unpatched.
        </Admonition>
      </Stack>
    ),
    /*     summary: () => (
      <Translate id="get.budgie.solus.summary" description="Summary of Solus">
        Solus offers a curated Budgie Desktop experience on top of its built-from-scratch operating system.
      </Translate>
    ), */
    showInGrid: false,
    website: "https://getsol.us",
  },
  {
    budgieAvailablePostInstall: "10.7.1",
    budgieVersion: "10.6.4",
    name: "Ubuntu Budgie",
    summary: () => (
      <Translate id="get.budgie.ubuntubudgie.summary" description="Summary of Ubuntu Budgie">
        Ubuntu Budgie offers a highly curated Budgie Desktop experience with Ubuntu at its core.
      </Translate>
    ),
    showInGrid: true,
    website: "https://ubuntubudgie.org",
  },
  {
    budgieAvailablePostInstall: "10.7.1",
    budgieVersion: "10.6.4",
    name: "Ultramarine Linux",
    summary: () => (
      <Translate id="get.budgie.ultramarinelinux.summary" description="Summary of Ultramarine Linux">
        Ultramarine Linux is a Fedora-based Linux distribution designed to stay out of your way and be easy to use.
      </Translate>
    ),
    showInGrid: true,
    website: "https://ultramarine-linux.org",
  },
];
