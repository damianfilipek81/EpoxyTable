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
import Modal from './components/Modal/ModalContainer';
import { Element } from 'react-scroll'
import MessengerCustomerChat from 'react-messenger-customer-chat';
require('dotenv').config()

function App() {
  const [currentPage, setCurrentPage] = useState(null);
  const screenWidth = window.innerWidth;

  const handlePageChange = number => {
    setCurrentPage(number)
  };
  
  return screenWidth > 768 ? (
    <Provider store={store}>
      <div>
        <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={currentPage}
          animationTimer={500}
          renderAllPagesOnFirstRender={false}
        >
          <Home handlePageChange={handlePageChange} />
          <AboutUs />
          <Gallery />
          <OurProducts />
          <Contact />
        </ReactPageScroller>
        <SideMenu handlePageChange={handlePageChange} />
        <MessengerCustomerChat
          pageId = {process.env.REACT_APP_MESS_PAGE_ID}
          appId= {process.env.REACT_APP_MESS_APP_ID}
        />
        <Modal />
      </div>
    </Provider >
  ) : (
    <Provider store={store}>
      <div>
        <Element name='home' ><Home /></Element>
        <Element name='aboutus' ><AboutUs /></Element>
        <Element name='gallery' ><Gallery /></Element>
        <Element name='ourproducts' ><OurProducts /></Element >
        <Element name='contact' ><Contact /></Element >
        <SideMenu />
        <Modal />
        <MessengerCustomerChat
          pageId = {process.env.REACT_APP_MESS_PAGE_ID}
          appId= {process.env.REACT_APP_MESS_APP_ID}
        />
      </div >
    </Provider >
  )
}

export default App;
