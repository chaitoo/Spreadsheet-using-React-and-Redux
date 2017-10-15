import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './store';

import { Grid } from './components';

const store = configureStore();


ReactDOM.render(
	<Provider store={store}>
		<Grid rowCount={25} colCount={25} />
	</Provider>, 
	document.getElementById('root')
);
