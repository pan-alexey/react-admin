import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store';

import UserList from './components/UserList'

const App: React.FC<{}> = () =>{
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div>App</div>
          <UserList />
        </div>
      </Router>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

