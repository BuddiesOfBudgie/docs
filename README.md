# Buddies of Budgie Documentation

[Buddies of Budgie Documentation](https://docs.buddiesofbudgie.org) is our documentation center leveraging [Docusaurus](https://docusaurus.io).

[![Deploy](https://github.com/BuddiesOfBudgie/docs/actions/workflows/deploy.yml/badge.svg?branch=deploy)](https://github.com/BuddiesOfBudgie/docs/actions/workflows/deploy.yml)

## Getting Started

To get started developing our Docusaurus instance, or writing documentation, first [fork this project](https://github.com/BuddiesOfBudgie/docs/fork) in order to submit pull requests for your changes

This project is written using [TypeScript](https://www.typescriptlang.org) and [React](https://reactjs.org), with some documentation being Markdown or [MDX](https://mdxjs.com/). To facilitate development, we use nvm and Yarn.

### NVM

To set up nvm, the Node Version Manager, follow the instructions listed [here](https://github.com/nvm-sh/nvm#readme). We recommend [setting up their shell integration](https://github.com/nvm-sh/nvm#deeper-shell-integration) as well, so you can automatically switch to the correct Node version when working on this project. Otherwise, ensure you run `nvm use`. This project requires the "current" supported release series of Node.

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

## Containers Images

We provide the following targets for our container image:

- `development`: This can be used to facilitate local development should you not wish to set up a host-based local development environment.
- `deploy`: This is used in our CI / CD pipeline and is what runs on our infrastructure.

### Using development target for local development

While you can run the development target without specifying a volume, which would effectively be a copy of what you have in your working directory at image build time, there is no advantage to doing so over running the deploy target. So this section will focus on use with our working directory set as mounted volume.

For this section, we will be using [podman](https://podman.io/), although the commands should be identical for docker as well should you use that instead. Just swap `podman` for `docker`.

- Build the image: `podman build -t docusaurus:development --target development .`
- Run the image: `podman run -it --rm -p 3000:3000 -v .:/app docusaurus:development`
- Interactive with `sh` as entrypoint (does not automatically start docusaurus): `podman run -it --rm -p 3000:3000 --entrypoint /bin/sh --tty -v .:/app docusaurus:development`

This will mount the working directory at `/app` as a volume and whenever there is a change to this directory, Docusaurus will automatically rebuild thanks to hot module reloading.

### Testing deploy

If you want to test the production image, follow the steps below:

- Build the image: `podman build -t docusaurus:deploy --target deploy .`
- Run the image: `podman run -it --rm -p 3000:3000 docusaurus:deploy`

## License

- Source code is licensed under Apache-2.0.
- Documentation is licensed under [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)
