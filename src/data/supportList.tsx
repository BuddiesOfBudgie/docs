import React from "react";
import { SupportInfo } from "../types";

import Translate from "@docusaurus/Translate";
import Admonition from "@theme/Admonition";

import CodeBlock from "@theme/CodeBlock";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";

export const SupportListData: SupportInfo[] = [
  {
    budgieAvailablePostInstall: null,
    budgieVersion: "10.8",
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
    budgieAvailablePostInstall: "10.8",
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
    budgieAvailablePostInstall: "10.7.2",
    budgieVersion: "10.7.1",
    name: "Fedora Budgie Spin",
    showInGrid: true,
    summary: () => (
      <Translate id="get.budgie.fedorabudgiespin.summary" description="Summary of Fedora Budgie Spin">
        Fedora Budgie Spin offers a near-stock Budgie Desktop experience on top of the Fedora open source platform.
      </Translate>
    ),
    website: "https://fedoraproject.org/spins/budgie/",
  },
  {
    budgieAvailablePostInstall: "10.7.1",
    budgieVersion: "10.7.1",
    installationInfo: () => (
      <>
        Budgie is not yet available in a quarterly release of FreeBSD; however, it can be installed if the Latest binary
        repository or the master branch of the ports repository is used instead.
        <Tabs>
          <TabItem value="package" label="Package">
            Install X11 and the Budgie package group:
            <CodeBlock language="bash">pkg install xorg-minimal budgie</CodeBlock>
          </TabItem>

          <TabItem value="port" label="Port">
            Configure and install X11:
            <CodeBlock language="bash">cd /usr/ports/x11/xorg-minimal && make config-recursive install clean</CodeBlock>
            Configure and install Budgie:
            <CodeBlock language="bash">cd /usr/ports/x11/budgie && make config-recursive install clean</CodeBlock>
          </TabItem>
        </Tabs>
        Finally, enable DBus and LightDM:
        <CodeBlock language="bash">sysrc dbus_enable="YES" lightdm_enable="YES"</CodeBlock>
        After a reboot, you will be able to log into Budgie.
        <Admonition icon="🚧" type="caution">
          Using the Latest repository or the master version of the ports repository may result in system instability.
        </Admonition>
      </>
    ),
    name: "FreeBSD",
    showInGrid: false,
    website: "https://freebsd.org",
  },
  {
    budgieAvailablePostInstall: "10.7.2",
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
    budgieVersion: "10.7.2",
    installationInfo: () => (
      <>
        Budgie Desktop can be installed through the following mechanisms on openSUSE.
        <Tabs>
          <TabItem value="graphical" label="Graphical (Leap 15.4+ and Tumbleweed)">
            Choose the "Budgie Desktop Environment" pattern under the "Desktop Environments" section when searching for
            patterns in YaST Software Management.
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
    budgieVersion: "10.7.2",
    name: "NixOS",
    installationInfo: () => (
      <>
        Budgie Desktop can be installed by adding the following to your system configuration:
        <CodeBlock language="nix">
          # Enable the X server.
          <br />
          services.xserver.enable = true;
          <br />
          # Enable the Budgie Desktop.
          <br />
          services.xserver.desktopManager.budgie.enable = true;
          <br />
          # Enable a display manager (recommended).
          <br />
          services.xserver.displayManager.lightdm.enable = true;
        </CodeBlock>
      </>
    ),
    summary: () => (
      <Translate id="get.budgie.nixos.summary" description="Summary of NixOS">
        NixOS is a Linux distribution based on the Nix package manager and build system.
      </Translate>
    ),
    showInGrid: true,
    website: "https://nixos.org/download.html#nixos-iso",
  },
  {
    budgieAvailablePostInstall: "10.7.2",
    budgieVersion: "10.7.2",
    name: "Solus",
    summary: () => (
      <Translate id="get.budgie.solus.summary" description="Summary of Solus">
        Solus offers a curated Budgie Desktop experience on top of its built-from-scratch operating system.
      </Translate>
    ),
    showInGrid: true,
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
    budgieAvailablePostInstall: "10.7.2",
    budgieVersion: "10.7.2",
    name: "Ultramarine Linux",
    summary: () => (
      <Translate id="get.budgie.ultramarinelinux.summary" description="Summary of Ultramarine Linux">
        Ultramarine Linux is a Fedora-based Linux distribution designed to stay out of your way and be easy to use.
      </Translate>
    ),
    showInGrid: true,
    website: "https://ultramarine-linux.org",
  },
  {
    budgieAvailablePostInstall: "10.7.1",
    budgieVersion: "10.6.4",
    name: "Void Linux",
    installationInfo: () => (
      <>
        Void Linux does not offer a Budgie Desktop installer profile, but it can be installed manually on top of the
        base image. First, install the required packages:
        <CodeBlock language="bash">
          sudo xbps-install budgie-desktop network-manager-applet lightdm-gtk3-greeter
        </CodeBlock>
        Enable DBus, elogind, NetworkManager, and LightDM:
        <CodeBlock language="bash">
          sudo ln -s /etc/sv/dbus /var/service
          <br />
          sudo ln -s /etc/sv/elogind /var/service
          <br />
          sudo ln -s /etc/sv/NetworkManager /var/service
          <br />
          sudo ln -s /etc/sv/lightdm /var/service
        </CodeBlock>
        Finally, disable dhcpcd:
        <CodeBlock language="bash">sudo rm -f /var/service/dhcpcd</CodeBlock>
        <p>After a reboot, you will be able to log into Budgie.</p>
      </>
    ),
    showInGrid: false,
    website: "https://voidlinux.org",
  },
];
