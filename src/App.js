import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Post from './posts/Posts';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Post />
      </div>
    </Provider>
  );
}

export default App;
