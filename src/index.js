import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { RecoilRoot } from 'recoil';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<React.Fragment>
		<RecoilRoot>
			<Router />
		</RecoilRoot>
	</React.Fragment>,
	// </React.StrictMode>
);

reportWebVitals();
