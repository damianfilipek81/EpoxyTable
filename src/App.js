import React, { useState } from 'react';
import Home from './components/home/HomeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import AboutUs from './components/AboutUs/AboutUs';
import ReactPageScroller from 'react-page-scroller';
import ScrollPagination from './components/ScrollPagination/ScrollPagination.js';
import Gallery from './components/Gallery/Gallery';

function App() {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = number => {
    setCurrentPage(number)
  };

  return (
    <Provider store={store}>
      <div>
        <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={currentPage}
        >
          <Home handlePageChange={handlePageChange}/>
          <AboutUs />
          <Gallery />
        </ReactPageScroller>
        <ScrollPagination handlePageChange={handlePageChange} />
      </div>
    </Provider>
  );
}

export default App;
