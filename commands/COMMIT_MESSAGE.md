# Commit And Push Guide For AI Agents

This document is the source of truth for how AI agents should create commits and push changes in this repository.

The goal is simple:
- make changes that are easy to review
- produce commit history that explains intent
- avoid unsafe git behavior
- never surprise the repository owner

Use this guide every time you prepare a commit.

## Core Rules

1. Commit only changes you understand.
2. Never commit secrets, API keys, tokens, `.env` contents, or private credentials.
3. Never include unrelated files in the same commit unless the user explicitly asked for it.
4. Never overwrite or revert changes you did not make unless the user explicitly asked for that.
5. Never use destructive git commands such as `git reset --hard`, `git checkout -- <file>`, or force-push unless the user explicitly approved it.
6. Prefer small, focused commits over one large mixed commit.
7. If the worktree contains unexpected changes, stop and ask the user how to proceed.
8. Do not amend commits unless the user explicitly asks for an amend.
9. Do not push until you know exactly what is being pushed.
10. If validation cannot be run, say so clearly before committing or in the final handoff.

## Default Workflow

Follow this sequence unless the user gives different instructions:

1. Inspect the worktree.
2. Identify which files belong to the requested task.
3. Review diffs for those files.
4. Run the appropriate validation for the change.
5. Stage only the intended files.
6. Write a clear commit message using the format below.
7. Confirm the resulting commit contains the intended files.
8. Push the correct branch.
9. Report the commit hash, branch, and any validation results.

## Pre-Commit Checklist

Before committing, verify all of the following:

- `git status --short` is understood
- no unexpected files are being included
- no secrets are present
- generated output is excluded unless it must be committed
- the change is scoped to one logical purpose
- the commit message matches the actual diff
- validation was run when practical

Recommended validations for this repository:

- `npm run lint`
- `npm run build`

If the change is very small and build is unnecessary, lint may be enough. If validation fails but the user still wants the commit, say that explicitly.

## What To Never Commit

Agents must not commit the following unless the user explicitly instructs otherwise:

- `.env`
- `.env.local`
- API keys, access tokens, credentials, or secrets in any file
- local caches and machine-specific files
- temporary debugging logs
- screenshots or assets that are unrelated to the requested change
- partial work that has not been reviewed for correctness

Files commonly safe to commit when intentionally changed:

- source files under `src/`
- content under `src/content/`
- config files such as `next.config.mjs`, `tailwind.config.ts`, or workflow files
- `package.json`
- `package-lock.json` when dependencies change
- public assets under `public/` when they are part of the requested feature

## Commit Message Format

Use Conventional Commits.

Format:

```text
<type>(<optional-scope>): <short imperative summary>
```

Examples:

```text
feat(blog): add metadata and structured data for posts
fix(projects): correct sticky scroll image activation
refactor(content): simplify markdown image rendering
docs(commands): add commit and push instructions for agents
chore(ci): add codex pull request review workflow
style(footer): simplify copyright copy
perf(images): optimize portfolio and blog image delivery
```

## Commit Message Rules

The subject line must be:

- in lowercase unless a proper noun requires uppercase
- imperative, not past tense
- specific about what changed
- short enough to scan quickly
- aligned with the actual diff

Good:

- `fix(blog): tighten spacing after inline images`
- `feat(projects): add asu network portfolio entry`
- `perf(images): serve blog content images with next/image`

Bad:

- `fixed stuff`
- `update`
- `changes`
- `commit`
- `final fix`
- `misc improvements`

## Commit Types

Use the smallest correct type.

### `feat`

Use for a new user-facing feature.

Examples:

- adding a new project card
- adding a new blog route behavior
- adding a new section to the homepage

### `fix`

Use for a bug fix or regression fix.

Examples:

- fixing broken image loading
- fixing incorrect spacing in blog posts
- fixing invalid external link behavior

### `refactor`

Use when code structure changes but behavior is intended to remain the same.

Examples:

- reorganizing component logic
- simplifying markdown processing
- extracting shared helper functions

### `perf`

Use for performance improvements.

Examples:

- compressing images
- improving bundle size
- reducing unnecessary rendering

### `style`

Use for visual or formatting changes that do not change behavior.

Examples:

- simplifying footer text
- adjusting typography
- updating spacing or colors

Do not use `style` for code formatting-only changes mixed with behavior changes. If behavior changes too, prefer `fix`, `feat`, or `refactor`.

### `docs`

Use for documentation only.

Examples:

- adding agent instructions
- updating repository docs
- writing usage guidance

### `test`

Use for test additions or test-only changes.

Examples:

- adding coverage for blog slug filtering
- updating assertions for metadata

### `chore`

Use for maintenance tasks that are not features, fixes, or docs.

Examples:

- updating workflows
- adjusting lint scripts
- minor repo housekeeping

## Scope Guidance

Add a scope when it improves clarity.

Good scopes for this repository:

- `blog`
- `projects`
- `footer`
- `images`
- `content`
- `seo`
- `ci`
- `commands`
- `navigation`

Skip the scope if it does not help.

Good:

- `fix(blog): remove hover effect from inline images`

Also acceptable:

- `fix: remove hover effect from blog inline images`

## When To Split Commits

Create separate commits when:

- one part is a bug fix and another part is a refactor
- source code changes and content changes are unrelated
- a dependency update is separate from the feature work
- a user’s manual edits should stay isolated from your edits

Do not split commits so aggressively that review becomes harder. The unit of a commit should be one coherent idea.

## Writing The Summary Correctly

The summary should answer:

- what changed
- where it changed
- why that change matters

Strong examples:

- `fix(blog): tighten spacing between captions and section headings`
- `perf(images): reduce portfolio image payload and add responsive sizes`
- `docs(commands): define commit and push rules for repository agents`

Weak examples:

- `fix ui`
- `more blog updates`
- `cleanup`

## Optional Commit Body

Add a body when the change needs context.

Use a body for:

- multi-part changes
- non-obvious tradeoffs
- validation notes
- migrations or follow-up caveats

Example:

```text
fix(blog): tighten spacing between captions and section headings

- reduce top padding on generated h2 and h3 blocks
- reduce figure margin and caption spacing
- keep image layout unchanged
```

Keep bodies concise and factual.

## Staging Rules

Always stage files intentionally.

Preferred pattern:

```bash
git status --short
git add <exact-file-paths>
git commit -m "type(scope): summary"
```

Do not use broad staging unless the entire worktree belongs to the same task:

```bash
git add .
```

Only use broad staging when you have already verified every modified file belongs in the commit.

## Push Rules

Before pushing:

1. Confirm the current branch.
2. Confirm the latest commit message.
3. Confirm the worktree is clean or intentionally left dirty.
4. Push only the branch intended by the user.

Rules:

- prefer pushing the current feature branch for PR work
- only push `main` when the user explicitly asked for it or the workflow clearly expects it
- never force-push unless the user explicitly approved it
- never push a commit you have not inspected

Useful commands:

```bash
git branch --show-current
git show --stat --oneline HEAD
git push origin <branch>
```

## Branch Guidance

If you need to create a branch and the user did not specify one, use a branch name with the `codex/` prefix.

Examples:

- `codex/fix-blog-spacing`
- `codex/add-bedrock-project`
- `codex/docs-agent-commit-guide`

If the user explicitly says to work on `main`, follow that instruction.

## Handling Unexpected Worktree Changes

If `git status --short` shows files you did not touch:

1. stop
2. do not revert them
3. tell the user exactly which files are unexpected
4. ask whether to exclude them, include them, or inspect them

Exception:

- if the user already told you those extra changes are theirs and should be included, you may proceed

## Repo-Specific Expectations

For this repository, agents should be especially careful about:

- blog content and markdown rendering under `src/lib/` and `src/content/`
- public assets under `public/`, since image changes can be large
- dependency changes in `package.json` and `package-lock.json`
- workflow changes under `.github/`
- generated output under `.next/`, which should not be committed

If image assets are added:

- verify they are intentional
- avoid committing duplicates or placeholder files
- use descriptive commit messages such as `feat(projects): add asu network project asset`

## Recommended Agent Output After Commit

After committing and pushing, report:

- branch name
- commit hash
- commit message
- whether the push succeeded
- validation results
- any known limitations or follow-up items

Example:

```text
Pushed to main.

Commit:
- 1234abc
- fix(blog): tighten spacing after inline images

Validation:
- npm run lint: passed
- npm run build: passed
```

## Quick Reference

Use this quick decision table:

- new feature: `feat`
- bug fix: `fix`
- performance improvement: `perf`
- behavior-preserving internal cleanup: `refactor`
- visual-only change: `style`
- docs only: `docs`
- tests only: `test`
- maintenance or tooling: `chore`

## Final Standard

Every commit made by an agent in this repository should be:

- intentional
- scoped
- reviewable
- reversible
- honest about validation
- safe to push

If the commit message does not clearly explain the diff, rewrite it before committing.
