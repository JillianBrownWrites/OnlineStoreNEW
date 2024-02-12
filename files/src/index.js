import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App.js';

const root = createRoot(document.getElementById('root'));

import { store } from './app/store.js';

const render = () => {
    root.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch}
        />
    )
};
render();

store.subscribe(render)