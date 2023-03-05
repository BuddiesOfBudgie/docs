# Buddies of Budgie Documentation

Buddies of Budgie Documentation is our documentation center leveraging [Docusaurus](https://docusaurus.io).

## Getting Started

To get started developing our Docusaurus instance, or writing documentation, first [fork this project](https://github.com/BuddiesOfBudgie/docs/fork) in order to submit pull requests for your changes

This project is written using [TypeScript](https://www.typescriptlang.org) and [React](https://reactjs.org), with some documentation being Markdown or [MDX](https://mdxjs.com/). To facilitate development, we use nvm and Yarn.

### NVM

To set up nvm, the Node Version Manager, follow the instructions listed [here](https://github.com/nvm-sh/nvm). We recommend [setting up their shell interation](https://github.com/nvm-sh/nvm#deeper-shell-integration) as well, so you can automatically switch to the correct Node version when working on this project. Otherwise, ensure you run `nvm use`. This project requires the "current" supported release series of Node.

You can validate you are using the latest by running `node --version`. Your version should be at least 19.x.

### Yarn

This project makes use of [Yarn](https://yarnpkg.com/) for its package management. After setting up nvm and ensuring you are running the latest Node, run:

```
corepack enable
```

### Installing Dependencies

To install the required dependencies, run: `yarn`

### Starting Docusaurus

To start the live reloading Docusaurus, run: `yarn start`

### Other Useful Commands

- Clear local build cache: `yarn clear`
- Linting: `yarn lint`
- Updating translation files: `yarn write-translations`
- Validate build: `yarn build`

## License

- Source code is licensed under Apache-2.0.
- Documentation is licensed under [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)
