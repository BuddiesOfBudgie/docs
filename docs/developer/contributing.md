---
title: Contributing
description: Guidelines and requirements for contributing to Buddies of Budgie projects.
sidebar_label: Contributing
keywords:
  - contributing
  - dco
  - developer certificate of origin
---

# Contributing

This document outlines the guidelines and requirements for contributing to Buddies of Budgie projects. All contributors, whether core team members or first-time contributors, are expected to follow these practices.

:::info AI Policy
Contributors should also review our [AI Policy](/organization/ai-policy) for guidelines on the use of AI tools in contributions.
:::

## Developer Certificate of Origin (DCO)

All commits to Buddies of Budgie projects must be signed off in accordance with the [Developer Certificate of Origin](https://developercertificate.org/). The DCO is a lightweight mechanism for contributors to certify that they have the right to submit their contribution under the project's license. It does not require signing a separate legal agreement — just a per-commit attestation in the git history.

The DCO provides a clear, per-commit record that every contributor has the right to submit their work. It protects both the contributor and the project, and is the same approach used by the Linux kernel, Git, and many other open source projects.

By adding a `Signed-off-by` trailer to your commit message, you are stating that you agree to the DCO for that contribution:

```
Signed-off-by: Your Name <your.email@example.com>
```

### How to Sign Off

The easiest way to sign off is to use the `-s` flag when committing:

```bash
git commit -s -m "fix(panel): correct tooltip alignment"
```

This automatically appends the `Signed-off-by` trailer using your configured `user.name` and `user.email` from git.

:::tip Make sure your git identity is set
If you haven't already, configure your name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

:::

There is no built-in git option to automatically sign off every commit. If you'd prefer not to remember the `-s` flag each time, you can set up a git alias:

```bash
git config --global alias.commit-signed 'commit -s'
```

This lets you use `git commit-signed` in place of `git commit` and the sign-off will be included automatically.

### Forgotten Sign-Offs

If you forget to sign off on a commit, you can amend it:

```bash
git commit --amend -s
```

For multiple commits, an interactive rebase may be necessary. If you need help with this, feel free to ask in the pull request and a maintainer will assist you.

