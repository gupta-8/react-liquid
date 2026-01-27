# Contributing to react-liquid

First of all, thank you for taking the time to contribute! 🎉  
Contributions of all kinds are welcome — bug reports, fixes, improvements, documentation, and ideas.

---

## Getting Started

1. Fork the repository
2. Clone your fork locally:

   ```
   git clone https://github.com/<your-username>/react-liquid.git
   ```
4. Create a new branch:

   ```
   git checkout -b my-feature-branch
   ```

---

## Development Setup

### Requirements
- Node.js (LTS recommended)
- npm / pnpm / yarn

### Install dependencies
```
npm install
```

### Run locally
```
npm run dev
```

### Build the library
```
npm run build
```

---

## Reporting Bugs

If you find a bug:
- Check existing issues to avoid duplicates
- Open a new issue with the **`bug`** label
- Include:
  - Clear steps to reproduce
  - Expected vs actual behavior
  - Screenshots or logs if applicable
  - Environment details (browser, OS, Node version)

---

## Suggesting Enhancements

Enhancement ideas are welcome!

When opening an enhancement issue:
- Use the **`enhancement`** label
- Clearly explain:
  - What problem it solves
  - Why it’s useful
  - Any alternative solutions considered

---

## Pull Request Guidelines

Before submitting a PR:

- Make sure your branch is up to date with `main`
- Keep PRs focused and small when possible
- Reference related issues (e.g. `Closes #12`)
- Ensure the project builds successfully
- Add tests if applicable (or explain why not)

### PR Title Format
```
type(scope): short description
```

Examples:
- `fix(build): remove trailing comma in package.json`
- `feat(toast): add auto-dismiss pause on hover`

---

## Code Style & Conventions

- Use TypeScript where applicable
- Prefer functional React components
- Keep components accessible (ARIA, reduced motion support)
- Avoid browser-only globals without guards (`window`, `crypto`, etc.)
- Follow existing patterns in the codebase

---

## Community Guidelines

- Be respectful and constructive
- Assume good intentions
- Feedback is welcome, personal attacks are not
- Help make this a welcoming space for everyone

---

Thanks again for contributing.
