# React Boilerplate

React + Redux Toolkit + TypeScript + React Router + Material UI

### Install

```sh
yarn install
```

### Develop

```sh
yarn start
```

### Contribute

```sh
yarn lint
```

```sh
yarn test
```

### Deploy

```sh
yarn build
```

### Directory

```sh
.
├── .github/            # github action CI
├── .vscode/            # IDE configuration
├── build/              # compiled prod version
├── public/             # static assets
├── src/
│   ├── components/     # share UI components
│   ├── features/       # features (routing, network, redux)
│   ├── index.css       # global styles
│   ├── index.tsx       # app entry
│   ├── screens/        # pages
│   └── setupTests.ts   # testing mocks
├── package.json        # dependencies
├── prettier.config.js  # formatting
├── README.md
└── tsconfig.json       # typescript config
└── yarn.lock
```

### Documentation

- UI https://mui.com/getting-started/usage/
- Redux https://redux-toolkit.js.org/tutorials/quick-start
- Navigation https://reactrouter.com/docs/en/v6/getting-started/overview

### TODO

- [x] lint errors
- [ ] react router
- [ ] redux toolkit
- [ ] axios
- [ ] theme
