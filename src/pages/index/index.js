
import React from 'react';
import ReactDom from 'react-dom';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routers from '../../routers/index';
import reducers from '../../reducers/index';
import createStore from '../../store/index';

import './index.scss';

const store = createStore(reducers);

const history = syncHistoryWithStore(hashHistory, store);

ReactDom.render(
	<Provider store={store}>
		<Router history={history}>{routers}</Router>
	</Provider>,
	document.getElementById('container')
);