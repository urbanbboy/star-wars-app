import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import App from '@containers/App';

import '@styles/index.css';

render(
	<React.StrictMode>
		<BrowserRouter>
					<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
