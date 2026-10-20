---
description: Where and how to report issues and feature requests for Budgie Desktop.
keywords:
  - budgie desktop
  - reporting issues
  - bug reports
  - feature requests
title: Reporting Issues
---

Buddies of Budgie tracks issues in two places, depending on which component you are reporting against. Reporting to the right place, with the information listed below, helps us look into it sooner.

## Where to Report

### GitHub: Budgie Desktop 10.10.x

Issues and feature requests for components that are strictly part of Budgie Desktop 10.10.x go to the component's repository on [our GitHub](https://github.com/BuddiesOfBudgie). For example:

- [Budgie Desktop](https://github.com/BuddiesOfBudgie/budgie-desktop/issues) (panel, applets, Raven, menu, notifications, screenshots, and the labwc bridge)
- [Budgie Control Center](https://github.com/BuddiesOfBudgie/budgie-control-center/issues)
- [Budgie Desktop View](https://github.com/BuddiesOfBudgie/budgie-desktop-view/issues)
- [Budgie Session](https://github.com/BuddiesOfBudgie/budgie-session/issues)

### Forge: Budgie 11 and Shared Components

Budgie 11, and components designed for both Budgie 10.10.x and Budgie 11, live on [our Forgejo](https://forge.moderndesktop.dev/BuddiesOfBudgie). Report these to the component's repository there.

This includes [budgie-desktop-services](https://forge.moderndesktop.dev/BuddiesOfBudgie/budgie-desktop-services/issues). It currently handles persisting your display configuration across sessions, so issues such as display settings not being restored after wake-from-suspend or logging back in should be reported there.

### Screen Lockers

Budgie Desktop 10.10 uses a separate screen locker, such as [gtklock](https://github.com/jovanlanik/gtklock) or [swaylock](https://github.com/swaywm/swaylock). Issues or feature requests for the screen locker itself, such as its appearance or how it handles authentication, should generally go to its developers:

- [gtklock issues](https://github.com/jovanlanik/gtklock/issues)
- [swaylock issues](https://github.com/swaywm/swaylock/issues)

Issues with how Budgie Desktop integrates with the screen locker should be reported to us on the [Budgie Desktop](https://github.com/BuddiesOfBudgie/budgie-desktop/issues) repository. For example, the lock screen shortcut not locking the screen, or the screen not locking after being idle.

## Before Reporting

- Search the open (and recently closed) issues to see whether it has already been reported. If it has, add any new information to the existing issue.
- Test with the latest version of Budgie Desktop if you can, to see whether the issue is already resolved. An issue reported against an older version of the desktop creates more triage work for us and is more likely to be closed due to regular churn in our desktop changing behavior or eliminating various classes of bugs.
  - See [Testing Budgie](./testing-budgie.mdx).
- Find your Budgie Desktop version by running `budgie-desktop --version`.

## Bug Reports

When reporting a bug, an unexpected error, a crash, or incorrect behavior, include:

- **Description**: what the issue is.
- **Budgie version**: the output of `budgie-desktop --version`.
- **Operating system**: the name and version of your operating system, for example Fedora 45.
- **Steps to reproduce**: the steps needed to make the issue happen, in order.
- **Actual result**: what happened, with screenshots if they help.
- **Expected result**: what you expected to happen instead.
- **Additional information**: anything else that might be relevant.

If Budgie Desktop crashed, include a backtrace. See [Providing Backtraces](../developer/workflow/providing-backtraces.mdx).

If you include build failures or other tool output, make sure it is in English. You can do this by running the command with `LC_ALL=C LANG=C` in front of it.

## Feature Requests

When suggesting a new feature or enhancement, include:

- **Budgie version**: the output of `budgie-desktop --version`, or the specific git commit you are using.
- **Use cases**: the end goal you are trying to achieve that led to this request. We need this to evaluate the request.
- **Proposal** (optional): any ideas you have on how it could be addressed.
- **References** (optional): any related issues, open or closed.
