import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { AppState, AppStore, reducer, store as initialStore } from '../redux';

export const getMockStore = (preloadedState: AppState): AppStore => {
  return configureStore({ preloadedState, reducer });
};

type WrapperProps = { children: ReactElement };

type OptionalOptions = { preloadedState?: AppState; store?: AppStore };

export const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = initialStore.getState(),
    store = configureStore({ preloadedState, reducer }),
    ...renderOptions
  }: OptionalOptions = {},
) => {
  const Wrapper = ({ children }: WrapperProps) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
