# Buddies of Budgie Documentation

[Buddies of Budgie Documentation](https://docs.buddiesofbudgie.org) is our documentation center leveraging [Docusaurus](https://docusaurus.io).

## Getting Started

To get started developing our Docusaurus instance, or writing documentation, first [fork this project](https://github.com/BuddiesOfBudgie/docs/fork) in order to submit pull requests for your changes

This project is written using [TypeScript](https://www.typescriptlang.org) and [React](https://reactjs.org), with some documentation being Markdown or [MDX](https://mdxjs.com/). To facilitate development, we use [Bun](https://bun.sh) as both the runtime and package manager.

### Bun

Install Bun by following the instructions listed [here](https://bun.sh/docs/installation). This project requires Bun 1.4.2 or newer, which you can validate by running `bun --version`.

### Installing Dependencies

To install the required dependencies, run: `bun install`

### Starting Docusaurus

To start the live reloading Docusaurus, run: `bun run start`

### Other Useful Commands

- Clear local build cache: `bun run clear`
- Formatting: `bun run lint`
- Lint and format checks (as run in CI): `bun run check`
- Typechecking: `bun run typecheck`
- Updating translation files: `bun run write-translations`
- Validate build: `bun run build`

## License

- Source code is licensed under Apache-2.0.
- Documentation is licensed under [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)
