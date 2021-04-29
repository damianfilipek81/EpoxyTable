import React from 'react';
import Home from './components/home/HomeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
        <AboutUs />
      </div>
    </Provider>
  );
}

export default App;
