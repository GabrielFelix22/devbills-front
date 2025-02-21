import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
