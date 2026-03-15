# Contributing to Buddies of Budgie Documentation

<!-- This document is written for both human contributors and AI coding assistants. -->

## Philosophy

This documentation site serves as the primary resource for users and developers of Budgie Desktop. Clear, accurate, and well-maintained documentation is essential — it shapes how people understand and interact with the project.

We hold ourselves to a high standard. Documentation that lands on this site should be well-understood by the person proposing it, reviewed for accuracy, and written with care. We would rather move deliberately than move fast and publish something misleading.

We follow a **human-centric development** model. AI tools are welcome as part of a contributor's workflow — they can help draft content, improve clarity, and accelerate writing. But humans are the authors. Humans are accountable. A contributor must understand and stand behind what they are proposing. AI is a tool in service of that goal, not a substitute for it.

### Contributor Responsibility

These expectations apply to all contributions, with or without AI assistance:

- You must understand the content you are proposing
- Changes must be reviewed for accuracy before submission
- You are ultimately accountable for the quality and correctness of the documentation

## Getting Started

### Local Development

```bash
# Clone
git clone https://github.com/BuddiesOfBudgie/docs.git && cd docs

# Install dependencies
yarn install

# Start dev server
yarn start

# Build
yarn build

# Typecheck
yarn typecheck

# Lint / format
yarn lint
```

### Project Structure

| Directory                        | Purpose                                         |
| -------------------------------- | ----------------------------------------------- |
| `docs/`                          | Unversioned documentation (current / Budgie 11) |
| `docs/developer/`                | Developer documentation                         |
| `docs/organization/`             | Organization-level policies and docs            |
| `versioned_docs/version-10.10/`  | Budgie 10.10 documentation                      |
| `versioned_docs/version-10.9.x/` | Legacy Budgie 10.9.x documentation              |
| `src/`                           | Site source (components, pages, CSS)            |
| `static/`                        | Static assets (images, fonts)                   |
| `i18n/`                          | Internationalization                            |

### Writing Documentation

- Documentation uses [MDX](https://mdxjs.com/) (Markdown with JSX support)
- Use [Docusaurus admonitions](https://docusaurus.io/docs/markdown-features/admonitions) for callouts: `:::info`, `:::tip`, `:::warning`, `:::danger`, `:::note`
- Use `<Tabs>` and `<TabItem>` components for OS/distro-specific content
- Store assets in an `assets/` folder relative to the document
- See the [writing documentation guide](https://docs.buddiesofbudgie.org/10.10/developer/meta/writing-documentation) for detailed formatting guidance

## Conventional Commits

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional trailers]
```

### Types

| Type       | Purpose                                          |
| ---------- | ------------------------------------------------ |
| `feat`     | New content, features, or capabilities           |
| `fix`      | Corrections to existing content or functionality |
| `refactor` | Restructuring without changing content           |
| `style`    | Formatting, whitespace, or cosmetic changes      |
| `docs`     | Documentation about the docs site itself (meta)  |
| `chore`    | Maintenance tasks, dependency updates, tooling   |
| `ci`       | CI/CD configuration changes                      |
| `build`    | Build system or external dependency changes      |

### Scopes

Use the most specific scope that fits.

| Scope                     | Directory / Area                      |
| ------------------------- | ------------------------------------- |
| `site`                    | Docusaurus site configuration, theme  |
| `developer`               | Unversioned developer documentation   |
| `user`                    | Unversioned user documentation        |
| `organization`            | Organization-level documentation      |
| `developer/<topic>`       | Specific developer doc                |
| `user/<topic>`            | Specific user doc                     |
| `10.10`                   | Budgie 10.10 versioned documentation  |
| `10.10/developer`         | 10.10 developer docs                  |
| `10.10/developer/<topic>` | Specific 10.10 developer doc          |
| `10.10/user`              | 10.10 user docs                       |
| `10.10/user/<topic>`      | Specific 10.10 user doc               |
| `10.9.x`                  | Legacy 10.9.x versioned documentation |
| `components`              | React components (`src/components/`)  |
| `pages`                   | Site pages (`src/pages/`)             |
| `css`                     | Styling (`src/css/`)                  |
| `i18n`                    | Internationalization                  |
| `deps`                    | Dependency updates                    |
| `ci`                      | CI/CD workflows (`.github/`)          |

### Rules

- Description: lowercase, imperative mood (write as a command, e.g., "add guide" not "added guide" or "adds guide"), no trailing period
- Keep the first line under 72 characters
- The body should explain **why**, not what — the diff shows what changed

## AI Policy

Contributors may use AI tools (Claude, Gemini, Copilot, ChatGPT, etc.) as part of their workflow. If you have used AI tools or LLMs as part of your contribution, you are expected to have read and understood the full [AI Policy](https://docs.buddiesofbudgie.org/organization/ai-policy) before submitting. The key rules:

- Use `Assisted-by: <Tool>:<model-id>` commit trailers when AI assisted with code or content changes
- Using AI for research only (human wrote everything) does not require attribution
- Intentional obfuscation of AI usage is grounds for rejection and potential blocking

For detailed attribution guidance and examples, see the full [AI Policy](https://docs.buddiesofbudgie.org/organization/ai-policy).

## Pull Requests

- Provide a clear description explaining **what** changed and **why**
- Verify your changes locally with `yarn start` before submitting
- Run `yarn build`, `yarn typecheck`, and `yarn lint` to catch issues
- If AI tools were used, ensure commits include the appropriate `Assisted-by` trailer
