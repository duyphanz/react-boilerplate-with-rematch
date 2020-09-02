import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import selectPlugin from '@rematch/select';

import * as models from './models';

const loading = createLoadingPlugin();
export const history = createBrowserHistory();
const reducers = { router: connectRouter(history) };

const store = init({
  redux: {
    reducers,
    middlewares: [routerMiddleware(history)],
    devtoolOptions: {
      disabled: process.env.NODE_ENV === 'production',
    },
  },
  plugins: [loading, selectPlugin()],
  models,
});

export default store;
