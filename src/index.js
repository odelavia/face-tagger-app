import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
