import { SupportInfo } from '../types'

import Translate from '@docusaurus/Translate'
import Admonition from '@theme/Admonition'

import CodeBlock from '@theme/CodeBlock'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

export const SupportListData: SupportInfo[] = [
  {
    budgieAvailablePostInstall: null,
    budgieVersion: '10.9.2',
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
    name: 'Arch Linux',
    showInGrid: false,
    website: 'https://archlinux.org',
  },
  {
    budgieAvailablePostInstall: null,
    budgieVersion: '10.9.2',
    name: 'EndeavourOS',
    showInGrid: true,
    summary: () => (
      <Translate id="get.budgie.endeavouros.summary" description="Summary of EndeavourOS">
        EndeavourOS is a terminal-centric distro built on top of Arch Linux. EndeavourOS offers through their unified
        installer the ability to install Budgie Desktop, with user choice on their desired experience.
      </Translate>
    ),
    website: 'https://endeavouros.com',
  },
  {
    budgieAvailablePostInstall: null,
    budgieVersion: '10.9.2',
    name: 'Fedora Budgie Spin',
    showInGrid: true,
    summary: () => (
      <Translate id="get.budgie.fedorabudgiespin.summary" description="Summary of Fedora Budgie Spin">
        Fedora Budgie Spin offers a near-stock Budgie Desktop experience on top of the Fedora open source platform.
      </Translate>
    ),
    website: 'https://fedoraproject.org/spins/budgie/',
  },
  {
    budgieAvailablePostInstall: null,
    budgieVersion: '10.9.2',
    name: 'Fedora Budgie Atomic',
    showInGrid: true,
    summary: () => (
      <Translate id="get.budgie.fedoraonyx.summary" description="Summary of Fedora Budgie Atomic">
        Fedora Budgie Atomic offers an atomic / immutable Fedora experience with a near-stock Budgie Desktop experience.
      </Translate>
    ),
    website: 'https://fedoraproject.org/atomic-desktops/budgie/',
  },
  {
    budgieAvailablePostInstall: '10.8.2',
    budgieVersion: '10.7.1',
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
    name: 'FreeBSD',
    showInGrid: false,
    website: 'https://freebsd.org',
  },
  {
    budgieAvailablePostInstall: null,
    budgieVersion: '10.9.2',
    name: 'NixOS',
    installationInfo: () => (
      <>
        Budgie Desktop can be installed by adding the following to your system configuration:
        <CodeBlock language="nix">
          # Enable the X server.
          <br />
          services.xserver.enable = true;
          <br /># Enable the Budgie Desktop.
          <br />
          services.xserver.desktopManager.budgie.enable = true;
          <br /># Enable a display manager (recommended).
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
    website: 'https://nixos.org/download.html#nixos-iso',
  },
  {
    budgieAvailablePostInstall: null,
    budgieVersion: '10.9.2',
    name: 'Solus',
    summary: () => (
      <Translate id="get.budgie.solus.summary" description="Summary of Solus">
        Solus offers a curated Budgie Desktop experience on top of its built-from-scratch operating system.
      </Translate>
    ),
    showInGrid: true,
    website: 'https://getsol.us',
  },
  {
    budgieAvailablePostInstall: null,
    budgieVersion: '10.9.2',
    name: 'Ubuntu Budgie',
    summary: () => (
      <Translate id="get.budgie.ubuntubudgie.summary" description="Summary of Ubuntu Budgie">
        Ubuntu Budgie offers a highly curated Budgie Desktop experience with Ubuntu at its core.
      </Translate>
    ),
    showInGrid: true,
    website: 'https://ubuntubudgie.org',
  },
  {
    budgieAvailablePostInstall: null,
    budgieVersion: '10.9.2',
    name: 'Ultramarine Linux',
    summary: () => (
      <Translate id="get.budgie.ultramarinelinux.summary" description="Summary of Ultramarine Linux">
        Ultramarine Linux is a Fedora-based Linux distribution designed to stay out of your way and be easy to use.
      </Translate>
    ),
    showInGrid: true,
    website: 'https://ultramarine-linux.org',
  },
]
