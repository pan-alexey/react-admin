import React from 'react';

import { Provider, useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';

function App() {
  // const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div>App</div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
