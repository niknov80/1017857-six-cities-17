import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { AuthorizationStatus, Setting } from './const';
import { offers } from './mocks/offers';
import { offersExt } from './mocks/offers-ext.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placeCardCount={ Setting.PlaceCardCount }
      authStatus={ AuthorizationStatus.Auth }
      offers={ offers }
      offersExtended={ offersExt }
    />
  </React.StrictMode>
);
