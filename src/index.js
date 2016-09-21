import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import React from 'react';
import {render} from 'react-dom';

import App from './app/app.js';
require("./style.css");

render(
    <App />,
    document.getElementById('app')
    )

