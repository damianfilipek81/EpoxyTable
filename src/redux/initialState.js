import {settings} from '../settings';

const initialState = {
  home: [
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_umv9nwvmyy/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-1.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_2ystcl8bm1/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-2.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_knrf1rmuyu/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-3.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
  ],
  gallery: [
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_umv9nwvmyy/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-1.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_2ystcl8bm1/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-2.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_knrf1rmuyu/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-3.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
    { image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg' },
  ],
  products: [
    {
      name: 'Blaty stołów jadalnianych',
      description: 'Zabezpieczane olejowoskiem z atestem spożywczym lub lakierem do kontaktu z żywnością.',
      image: settings.products.jadalnia,
      price: '1800'
    },
    {
      name: 'Blaty stołów salonowych',
      description: 'Zabezpieczane olejowoskiem lub lakierem. Możliwość zabezpieczenia olejowoskiem z atestem spożywczym lub lakierem do kontaktu z żywnością',
      image: settings.products.salon,
      price: '3300'
    },
    {
      name: 'Blaty łazienkowe',
      description: 'Zabezpieczene lakierem wodoodpornym.',
      image: settings.products.lazienka,
      price: '1250'
    },
    {
      name: 'Blaty kuchenne',
      description: 'Zabezpieczane olejowoskiem z atestem spożywczym lub lakierem do kontaktu z żywnością.',
      image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg',
      price: '2000'
    },
    {
      name: 'Stoliki kawowe',
      description: 'Zabezpieczane olejowoskiem lub lakierem. Możliwość zabezpieczenia olejowoskiem z atestem spożywczym lub lakierem do kontaktu z żywnością.',
      image: settings.products.kawowy,
      price: '900'
    }
  ],
  modal: {
    image: null,
    product: false,
  },

}

export default initialState;