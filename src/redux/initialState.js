import { settings } from '../settings';

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
      price: '1800',
      id: 1
    },
    {
      name: 'Blaty stołów salonowych',
      description: 'Zabezpieczane olejowoskiem lub lakierem. Możliwość zabezpieczenia olejowoskiem z atestem spożywczym lub lakierem do kontaktu z żywnością',
      image: settings.products.salon,
      price: '3300',
      id: 2
    },
    {
      name: 'Blaty łazienkowe',
      description: 'Zabezpieczene lakierem wodoodpornym.',
      image: settings.products.lazienka,
      price: '1250',
      id: 3
    },
    {
      name: 'Blaty kuchenne',
      description: 'Zabezpieczane olejowoskiem z atestem spożywczym lub lakierem do kontaktu z żywnością.',
      image: settings.products.kuchnia,
      price: '2000',
      id: 4
    },
    {
      name: 'Stoliki kawowe',
      description: 'Zabezpieczane olejowoskiem lub lakierem. Możliwość zabezpieczenia olejowoskiem z atestem spożywczym lub lakierem do kontaktu z żywnością.',
      image: settings.products.kawowy,
      price: '900',
      id: 5
    },
    {
      name: 'Nogi',
      description: '',
      image: settings.products.nogi,
      price: '400',
      id: 5
    }
  ],
  modal: {
    image: null,
    product: false,
    id: null,
  },
  modalProducts: [
    {
      id: 1,
      description: 'Wymiary blatu jadalnianego wykonywane są na życzenie klienta, poniżej przykładowe wymiary.',
      products: [
        {name: 'blat jadalniany z dębu (kolor żywicy do wyboru) 110x70x4', price: '1800', date: '18'},
        {name: 'blat jadalniany z orzecha włoskiego (kolor żywicy do wyboru) 110x70x4', price: '1900', date: '18'},
        {name: 'blat jadalniany z dębu (kolor żywicy do wyboru) 130x80x4', price: '2050', date: '18'},
        {name: 'blat jadalniany z orzecha włoskiego (kolor żywicy do wyboru) 130x80x4', price: '2150', date: '18'},
        {name: 'blat jadalniany z dębu (kolor żywicy do wyboru) 150x90x4', price: '2300', date: '18'},
        {name: 'blat jadalniany z orzecha włoskiego (kolor żywicy do wyboru) 150x90x4', price: '2400', date: '18'},
        {name: 'blat jadalniany z dębu (kolor żywicy do wyboru) 170x90x4', price: '2550', date: '18'},
        {name: 'blat jadalniany z orzecha włoskiego (kolor żywicy do wyboru) 170x90x4', price: '2650', date: '18'},
      ],
    },
    {
      id: 2,
      description: 'Wymiary blatu salonowego wykonywane są na życzenie klienta, poniżej przykładowe wymiary.',
        products: [
          {name: 'blat salonowy z dębu lub jesionu (kolor żywicy do wyboru) 200x90x4', price: '3300', date: '21'},
          {name: 'blat salonowy z z orzecha włoskiego (kolor żywicy do wyboru) 200x90x4', price: '3400', date: '21'},
          {name: 'blat salonowy z dębu lub jesionu (kolor żywicy do wyboru) 225x100x4', price: '3700', date: '21'},
          {name: 'blat salonowy z z orzecha włoskiego (kolor żywicy do wyboru) 225x100x4', price: '3800', date: '21'},
          {name: 'blat salonowy z dębu lub jesionu (kolor żywicy do wyboru) 250x90x4', price: '4200', date: '21'},
          {name: 'blat salonowy z z orzecha włoskiego (kolor żywicy do wyboru) 250x90x4', price: '4300', date: '21'},
        ],
    },
    {
      id: 3,
      description: 'Wymiary blatu łazienkowego wykonywane są na życzenie klienta, poniżej przykładowe wymiary.',
      products: [
        {name: 'blat łazienkowy z dębu lub jesionu (kolor żywicy do wyboru) 90x50x4', price: '1250', date: '21'},
        {name: 'blat łazienkowy z z orzecha włoskiego (kolor żywicy do wyboru) 90x50x4', price: '1300', date: '21'},
        {name: 'blat łazienkowy z dębu lub jesionu (kolor żywicy do wyboru) 110x60x4', price: '1450', date: '21'},
        {name: 'blat łazienkowy z z orzecha włoskiego (kolor żywicy do wyboru) 110x60x4', price: '1500', date: '21'},
        {name: 'blat łazienkowy z dębu lub jesionu (kolor żywicy do wyboru) 130x60x4', price: '1650', date: '21'},
        {name: 'blat łazienkowy z z orzecha włoskiego (kolor żywicy do wyboru) 130x60x4', price: '1700', date: '21'},
      ],
    },
    {
      id: 4,
      description: 'Wymiary blatu kuchennego wykonywane są na życzenie klienta, poniżej przykładowe wymiary.',
      products: [
        {name: 'blat kuchenny z dębu lub jesionu (kolor żywicy do wyboru) 250x60x4', price: '3000', date: '21'},
        {name: 'blat kuchenny z orzecha włoskiego (kolor żywicy do wyboru) 250x60x4', price: '3100', date: '21'},
        {name: 'blat kuchenny z dębu lub jesionu (kolor żywicy do wyboru) 300x60x4', price: '4000', date: '21'},
        {name: 'blat kuchenny z orzecha włoskiego (kolor żywicy do wyboru) 300x60x4', price: '4100', date: '21'},
        {name: 'blat kuchenny z dębu lub jesionu (kolor żywicy do wyboru) 350x60x4', price: '5000', date: '21'},
        {name: 'blat kuchenny z orzecha włoskiego (kolor żywicy do wyboru) 350x60x4', price: '5100', date: '21'},
      ],
    },
    {
      id: 5,
      description: '',
      products: [
        {name: 'Stolik kawowy z orzecha włoskiego, (kolor żywicy do wyboru). Różne rozmiary na zamówienie według wizualizacji klienta.', price: '900 - 1500', date: '14'}
      ],
    },
    {
      id: 6,
      description: 'Do stołów i stolik wykonujemy nogi:',
      products: [
        {name: 'Nogi Typu prostokątnego lub w kształcie litery X połączone w stelaż', price: 'Stoły jadalniane: 400-500, Stoły salonowe: 500-700', date:'-'},
        {name: 'Nogi typu „pająk”', price: 'Stoły jadalniane: 600-800, Stoły salonowe: 1000-1600', date: '-'}
      ],
    }
  ]
}

export default initialState;