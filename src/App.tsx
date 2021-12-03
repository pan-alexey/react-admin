import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store';

import UserList from './components/UserList'

function App() {
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

export default App;
