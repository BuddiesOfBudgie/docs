---
name: commit
description: Stage and commit changes using Conventional Commits
disable-model-invocation: false
allowed-tools: Bash(git *)
---

Create a git commit for the current changes following the Conventional Commits specification.

## Steps

1. Run these commands in parallel to understand the current state:
   - `git status` to see all changed and untracked files
   - `git diff` to see unstaged changes
   - `git diff --cached` to see already-staged changes
   - `git log --oneline -5` to see recent commit style

2. Analyze the changes and determine:
   - Which files should be staged (skip files that likely contain secrets like `.env`, credentials, etc.)
   - The appropriate Conventional Commit type and scope
   - A concise description of the change

3. Stage the relevant files by name (do NOT use `git add -A` or `git add .`)

4. Determine attribution — analyze the conversation context:
   - **Did Claude write or modify code/content** (generate implementations, write documentation, create components)? → Add `Assisted-by: Claude:<model-id>` trailer
   - **Did Claude only perform mechanical tasks** (committing, formatting, running commands) or did the human make all changes? → NO trailer
   - Never use `Co-Authored-By`

5. Craft the commit message following this format:

```
<type>(<scope>): <description>

[optional body]

[Assisted-by: Claude:<model-id> — only if Claude assisted with code/content changes]
```

### Conventional Commit types

- **feat**: A new feature or capability
- **fix**: A bug fix
- **refactor**: Code restructuring without changing behavior
- **style**: Formatting, whitespace, or cosmetic changes
- **docs**: Documentation content changes
- **chore**: Maintenance tasks, dependency updates, tooling
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **ci**: CI/CD configuration changes
- **build**: Build system or external dependency changes

### Scopes

Use the most specific scope that fits.

| Scope | Area |
|-------|------|
| `site` | Docusaurus site configuration, theme, components |
| `developer` | Unversioned developer documentation content |
| `user` | Unversioned user documentation content |
| `developer/<topic>` | Specific developer doc (e.g., `developer/ai-policy`, `developer/building`) |
| `user/<topic>` | Specific user doc (e.g., `user/keyboard-shortcuts`) |
| `10.10` | Budgie 10.10 versioned documentation (`versioned_docs/version-10.10/`) |
| `10.10/developer` | 10.10 developer docs |
| `10.10/developer/<topic>` | Specific 10.10 developer doc (e.g., `10.10/developer/building`) |
| `10.10/user` | 10.10 user docs |
| `10.10/user/<topic>` | Specific 10.10 user doc (e.g., `10.10/user/keyboard-shortcuts`) |
| `10.9.x` | Legacy 10.9.x versioned documentation (`versioned_docs/version-10.9.x/`) |
| `components` | React components (`src/components/`) |
| `pages` | Site pages (`src/pages/`) |
| `css` | Styling (`src/css/`) |
| `i18n` | Internationalization |
| `deps` | Dependency updates |
| `ci` | CI/CD workflows (`.github/`) |

### Rules

- The description should be lowercase, imperative mood (write as a command, e.g., "add guide" not "added guide" or "adds guide"), and not end with a period
- Keep the first line under 72 characters
- Scope is optional but encouraged — use the most relevant area
- The body should explain **why**, not what — the diff shows what changed
- If changes span multiple concerns, prefer a single commit with a clear summary over being overly granular
- Always pass the commit message via a HEREDOC:

```bash
git commit -m "$(cat <<'EOF'
type(scope): description

Optional body.

Assisted-by: Claude:<model-id>
EOF
)"
```

6. After committing, run `git status` to verify success.

## Arguments

If `$ARGUMENTS` is provided, use it as guidance for the commit message or scope.
