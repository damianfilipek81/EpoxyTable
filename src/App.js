import React, { useState } from 'react';
import Home from './components/home/HomeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import AboutUs from './components/AboutUs/AboutUs';
import ReactPageScroller from 'react-page-scroller';
import SideMenu from './components/SideMenu/SideMenu.js';
import Gallery from './components/Gallery/GalleryContainer';
import OurProducts from './components/OurProducts/OurProductsContainer';
import Contact from './components/Contact/Contact';

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
          <Home handlePageChange={handlePageChange} />
          <AboutUs />
          <Gallery />
          <OurProducts />
          <Contact />
        </ReactPageScroller>
        <SideMenu handlePageChange={handlePageChange} />
      </div>
    </Provider>
  );
}

export default App;
