import React from "react";
import { SupportInfo } from "../types";

import Admonition from "@theme/Admonition";
import Translate from "@docusaurus/Translate";

import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export const SupportListData: SupportInfo[] = [
  {
    budgieAvailablePostInstall: null,
    budgieVersion: "10.7.1",
    installationInfo: () => (
      <>
        Arch Linux offers a Budgie Desktop profile within its 'archinstall' installer, though more intrepid users also
        have the option to install the desktop manually.
        <Tabs>
          <TabItem value="archinstall" label="archinstall">
            Under the "Profile" option, select "desktop", then "budgie".
          </TabItem>

          <TabItem value="manual" label="Manual Installation">
            After completing manual installation, run the following to install Budgie and a login manager:
            <CodeBlock language="bash">sudo pacman -S budgie lightdm-gtk-greeter</CodeBlock>
            It's also recommended to install nm-applet, the default GTK theme, and the default icon theme:
            <CodeBlock language="bash">
              sudo pacman -S arc-gtk-theme papirus-icon-theme network-manager-applet
            </CodeBlock>
            Finally, enable LightDM:
            <CodeBlock language="bash">sudo systemctl enable --now lightdm</CodeBlock>
          </TabItem>
        </Tabs>
      </>
    ),
    name: "Arch Linux",
    showInGrid: false,
    website: "https://archlinux.org",
  },
  {
    budgieAvailablePostInstall: null,
    budgieVersion: "10.5.2",
    name: "Debian",
    showInGrid: false,
    installationInfo: () => (
      <Admonition icon="🚧" type="note" title="Coming Soon">
        Installation instructions coming soon!
      </Admonition>
    ),
    website: "https://debian.org",
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
      <>
        Manjaro Budgie Community Edition offers Budgie Desktop as an out-of-the-box experience on top of Manjaro.
        Manjaro is based on Arch Linux.
        <Admonition icon="🚧" type="caution">
          The Budgie Desktop experience offered by this edition is incomplete, setting no default theme or enabling our
          built-in theme. This results in a partially broken user experience.
        </Admonition>
      </>
    ),
    name: "Manjaro Budgie Community Edition",
    showInGrid: false,
    website: "https://manjaro.org",
  },
  {
    budgieAvailablePostInstall: null,
    budgieVersion: "10.7.1",
    installationInfo: () => (
      <>
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
      </>
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
      <>
        <Translate id="get.budgie.solus.summary" description="Summary of Solus">
          Solus offers a curated Budgie Desktop experience on top of its built-from-scratch operating system.
        </Translate>
        <Admonition icon="🚧" type="caution">
          It is currently cautioned against installation of Solus. It may not work out-of-the-box on modern hardware as
          no new release has been made since mid-2021. Additionally, Solus infrastructure has not been operational for
          over two months, resulting in numerous packages remaining out-of-date with security vulnerabilities going
          unpatched.
        </Admonition>
      </>
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
