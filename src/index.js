import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { GlobalStyle } from 'GlobalStyle';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from 'UI/Spinner/Spinner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <App />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
