# React Boilerplate

React + Redux Toolkit + TypeScript + React Router + Material UI

https://ethanneff.github.io/template-material-ui/

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
yarn prettier
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
├── .github/                # github action CI
├── .vscode/                # IDE configuration
├── build/                  # compiled prod version
├── public/                 # static assets
├── src/
│   ├── components/         # shared UI
│   ├── features/           # shared features (navigation, network)
│   ├── redux/              # shared data
│   ├── screens/            # pages
│   ├── index.css           # global styles
│   ├── index.tsx           # app entry
│   ├── react-app-env.d.ts  # typescript typings
│   └── setupTests.ts       # testing mocks
├── package.json            # dependencies
├── prettier.config.js      # formatting
├── README.md
└── tsconfig.json           # typescript config
└── yarn.lock
```

### Documentation

UI https://mui.com/getting-started/usage/

Redux https://redux-toolkit.js.org/tutorials/quick-start

Navigation https://reactrouter.com/docs/en/v6/getting-started/overview

### TODO

- [x] lint errors
- [x] react router
- [ ] fix eslint
- [x] redux toolkit
- [ ] axios
- [ ] mock data
- [ ] suspense
- [x] error boundary
- [x] theme
