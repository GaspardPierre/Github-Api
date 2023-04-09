import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./store/store";
import 'semantic-ui-css/semantic.min.css';

import App from './component/App/App';

const root = document.getElementById("root");
createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
