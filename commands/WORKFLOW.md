# Repository Workflow Guide For AI Agents

This file explains how AI agents should work in this repository from start to finish.

Read this before making changes.

Also read:

- [COMMIT_MESSAGE.md](/Users/luannguyen/Workspace/portfolio/commands/COMMIT_MESSAGE.md)

This repository is a personal portfolio built with Next.js, Tailwind CSS, and markdown-based blog content. Most work in this repo falls into one of these categories:

- portfolio UI updates
- project/content updates
- blog rendering or blog content changes
- image and performance improvements
- workflow/configuration changes

The standard for agent work here is:

- be precise
- avoid accidental regressions
- keep changes scoped
- validate what you change
- communicate clearly about what was done

## Primary Goal

Agents should help improve the portfolio without introducing confusion, broken UX, unsafe git operations, or noisy commits.

Every task should aim to leave the repo in a better state than it started.

## High-Level Workflow

Use this sequence for nearly all work:

1. understand the request
2. inspect the relevant files
3. identify the smallest correct change
4. make the change
5. validate the result
6. review the diff
7. commit and push only if the user asked

Do not jump directly to commit/push without first checking the worktree and the diff.

## Repository Map

Use this as the default mental model for the codebase.

### App Structure

- `/Users/luannguyen/Workspace/portfolio/src/app`
  - app router pages and layouts
  - main site entry points

- `/Users/luannguyen/Workspace/portfolio/src/app/components`
  - reusable UI components
  - section-level homepage components
  - blog presentation components

- `/Users/luannguyen/Workspace/portfolio/src/app/components/sections`
  - major homepage sections such as projects, footer, profile, and feature blocks

- `/Users/luannguyen/Workspace/portfolio/src/app/components/blog`
  - blog listing cards
  - blog post header/content rendering

- `/Users/luannguyen/Workspace/portfolio/src/app/components/ui`
  - lower-level UI primitives and interactive effects

- `/Users/luannguyen/Workspace/portfolio/src/content/blog`
  - markdown source files for blog posts

- `/Users/luannguyen/Workspace/portfolio/src/lib`
  - blog parsing, content transformation, and helper logic

- `/Users/luannguyen/Workspace/portfolio/data`
  - structured data for portfolio sections such as projects

- `/Users/luannguyen/Workspace/portfolio/public`
  - images and static assets

### Important Files

- `/Users/luannguyen/Workspace/portfolio/package.json`
  - scripts and dependency definitions

- `/Users/luannguyen/Workspace/portfolio/next.config.mjs`
  - Next.js configuration and image behavior

- `/Users/luannguyen/Workspace/portfolio/tailwind.config.ts`
  - theme and utility configuration

- `/Users/luannguyen/Workspace/portfolio/src/app/layout.tsx`
  - root layout and metadata-level behavior

- `/Users/luannguyen/Workspace/portfolio/src/app/page.tsx`
  - homepage composition

- `/Users/luannguyen/Workspace/portfolio/src/lib/blog.ts`
  - critical file for blog metadata, hidden posts, markdown rendering, styling transforms, and image handling

## How To Choose Where To Edit

Use the smallest, most direct edit location.

### If the request is about homepage content

Check:

- `/Users/luannguyen/Workspace/portfolio/data/projects.ts`
- `/Users/luannguyen/Workspace/portfolio/src/app/components/sections/*`

Prefer updating the data source first if the UI already maps from data.

### If the request is about blog content

Check:

- `/Users/luannguyen/Workspace/portfolio/src/content/blog/*.md`

If it is a rendering, spacing, metadata, or markdown behavior issue, also check:

- `/Users/luannguyen/Workspace/portfolio/src/app/components/blog/*`
- `/Users/luannguyen/Workspace/portfolio/src/lib/blog.ts`

### If the request is about styling or layout

Check the component rendering the content first before changing global styles.

Prefer:

- local Tailwind class changes in the affected component

Avoid:

- broad global CSS edits unless the issue is genuinely cross-cutting

### If the request is about image performance

Check:

- image source files under `/Users/luannguyen/Workspace/portfolio/public`
- any `next/image` call sites
- `/Users/luannguyen/Workspace/portfolio/next.config.mjs`

### If the request is about SEO

Check:

- route-level metadata in app router pages
- blog route metadata generation
- structured data output
- canonical handling

## Editing Standards

### General

- prefer focused edits over large rewrites
- preserve existing architecture unless the task requires a change
- do not introduce unnecessary abstractions
- do not rename files or components unless there is clear value
- use ASCII unless the file already uses non-ASCII text intentionally

### Comments

- add comments only when needed
- do not add obvious comments
- prefer self-explanatory code

### Tailwind Changes

- keep class changes localized to the component
- avoid random one-off class sprawl when a simpler combination will do
- preserve the visual language of the portfolio unless the user asks for a redesign

### React / Next.js

- prefer server-safe code unless client behavior is required
- do not add `"use client"` unless the component actually needs it
- use `next/image` when appropriate for static and blog-rendered images
- keep metadata and SEO logic near the route where possible

## Validation Rules

After making changes, validate them at the right level.

Default validation for this repo:

```bash
npm run lint
npm run build
```

Use both when:

- changing routes
- changing component rendering
- changing markdown rendering
- changing configuration
- changing blog parsing
- changing assets or image handling in a way that affects builds

If the task is extremely small, lint may be enough, but build is preferred when practical.

Additional useful validation:

```bash
npx tsc --noEmit
```

If a validation step fails:

1. determine whether the failure is caused by your change
2. fix it if it is yours
3. if it is unrelated, report it clearly
4. do not hide or ignore build failures

## Git And Worktree Safety

Agents must work carefully when the worktree is dirty.

Before editing or committing:

```bash
git status --short
```

If you see files you did not touch:

- do not revert them
- do not assume they are safe to include
- tell the user exactly which files are unexpected
- wait for direction unless the user already said to include them

Use the commit rules in:

- [COMMIT_MESSAGE.md](/Users/luannguyen/Workspace/portfolio/commands/COMMIT_MESSAGE.md)

## Push Rules

Do not push automatically unless the user explicitly asked.

When the user asks to push:

1. confirm the branch
2. confirm the latest commit
3. confirm the worktree status
4. push only the intended branch

If the user wants PR-oriented work:

- prefer a feature branch with the `codex/` prefix unless they specify another branch

If the user wants direct main updates:

- push `main` only because they explicitly asked

## Repo-Specific Guidance

### Blog System

The blog pipeline is one of the highest-risk areas in this repo because behavior is split across markdown content, parser logic, and UI components.

When touching blog behavior, inspect:

- `/Users/luannguyen/Workspace/portfolio/src/content/blog`
- `/Users/luannguyen/Workspace/portfolio/src/lib/blog.ts`
- `/Users/luannguyen/Workspace/portfolio/src/app/components/blog`
- `/Users/luannguyen/Workspace/portfolio/src/app/blog`

Be careful with:

- markdown-to-HTML transformations
- sanitization behavior
- heading and spacing transforms
- hidden post filtering
- blog image rendering
- metadata generation

If you change blog rendering, validate with a build.

### Projects Section

Project content may be rendered in multiple places.

When editing projects, inspect both:

- `/Users/luannguyen/Workspace/portfolio/data/projects.ts`
- homepage project components under `/Users/luannguyen/Workspace/portfolio/src/app/components/sections`

Do not assume a single component controls every project card.

### Images And Static Assets

Large images can slow the portfolio substantially.

When adding or replacing images:

- verify the asset is actually needed
- prefer optimized image formats when practical
- avoid overly large files for small UI surfaces
- make sure the asset path is correct
- confirm any corresponding `next/image` usage has a sensible `sizes` value

Do not casually add multi-megabyte files if a smaller version would work.

### Footer And Small Copy Updates

These are usually simple tasks, but still inspect the diff before committing. Small copy changes are easy to mix with unrelated edits.

## How To Handle Common Task Types

### Adding A New Project

Typical steps:

1. inspect `/Users/luannguyen/Workspace/portfolio/data/projects.ts`
2. inspect the relevant projects components
3. add the content in the correct data structure
4. add any needed asset under `/Users/luannguyen/Workspace/portfolio/public`
5. validate rendering with lint/build

### Updating A Blog Post

Typical steps:

1. edit the markdown file under `/Users/luannguyen/Workspace/portfolio/src/content/blog`
2. verify frontmatter fields still make sense
3. if the change affects layout or media, inspect the rendering components too
4. run validation

### Fixing A Visual Bug

Typical steps:

1. locate the component actually rendering the problem
2. avoid broad global CSS changes unless necessary
3. keep the patch minimal
4. validate with lint and build if the rendering path is important

### Updating Tooling Or Config

Typical steps:

1. inspect current scripts/config
2. keep compatibility with the existing Next.js setup
3. validate with lint and build
4. explain any migration impact clearly

## What Good Agent Work Looks Like

Good work in this repository is:

- scoped to the task
- validated when practical
- careful with images and blog rendering
- safe with git
- clear in commit messages
- honest about limitations

Good final handoff includes:

- what changed
- which files changed
- what validation ran
- any unresolved issue
- commit hash and branch if a commit was created

## What Bad Agent Work Looks Like

Avoid the following:

- committing unrelated files
- changing content and infrastructure together without reason
- editing global styles for a local issue
- pushing without checking the diff
- assuming data is only rendered in one component
- leaving build issues unmentioned
- making large aesthetic changes when the request was small

## Recommended Commands

Use these frequently:

```bash
git status --short
git diff -- <file>
git branch --show-current
git show --stat --oneline HEAD
npm run lint
npm run build
```

Use targeted search instead of guessing:

```bash
rg "search-term" /Users/luannguyen/Workspace/portfolio/src
rg --files /Users/luannguyen/Workspace/portfolio/src
```

## Final Rule

Agents should optimize for correctness, clarity, and clean history.

When in doubt:

- inspect more
- change less
- validate before claiming success
- commit only what you can defend
