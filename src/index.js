import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@containers/App';

import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'
import ThemeProvider from './context/ThemeProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <HashRouter  >
        <Provider store={store}>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </Provider>
    </HashRouter>
    
);


