import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';

import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import './i18n';

import App from './components/App';

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>,
    document.getElementById('root')
);
