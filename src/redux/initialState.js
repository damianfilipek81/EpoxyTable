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
      image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg',
      price: '2000',
      id: 4
    },
    {
      name: 'Stoliki kawowe',
      description: 'Zabezpieczane olejowoskiem lub lakierem. Możliwość zabezpieczenia olejowoskiem z atestem spożywczym lub lakierem do kontaktu z żywnością.',
      image: settings.products.kawowy,
      price: '900',
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
      types: [
        'blat jadalniany z dębu (kolor żywicy do wyboru) 110x70x4',
        'blat jadalniany z orzecha włoskiego (kolor żywicy do wyboru) 110x70x4',
        'blat jadalniany z dębu (kolor żywicy do wyboru) 130x80x4',
        'blat jadalniany z orzecha włoskiego (kolor żywicy do wyboru) 130x80x4',
        'blat jadalniany z dębu (kolor żywicy do wyboru) 150x90x4',
        'blat jadalniany z orzecha włoskiego (kolor żywicy do wyboru) 150x90x4',
        'blat jadalniany z dębu (kolor żywicy do wyboru) 170x90x4',
        'blat jadalniany z orzecha włoskiego (kolor żywicy do wyboru) 170x90x4',
      ],
      prices: [
        '1800', '1900', '2050', '2150', '2300', '2400', '2550', '2650'
      ],
      time: [
        '18', '18', '18', '18', '18', '18', '18', '18'
      ]
    },
    {
      id: 2,
      description: 'Wymiary blatu salonowego wykonywane są na życzenie klienta, poniżej przykładowe wymiary.',
        types: [
          'blat salonowy z dębu lub jesionu (kolor żywicy do wyboru) 200x90x4',
          'blat salonowy z z orzecha włoskiego (kolor żywicy do wyboru) 200x90x4',
          'blat salonowy z dębu lub jesionu (kolor żywicy do wyboru) 225x100x4',
          'blat salonowy z z orzecha włoskiego (kolor żywicy do wyboru) 225x100x4',
          'blat salonowy z dębu lub jesionu (kolor żywicy do wyboru) 250x90x4',
          'blat salonowy z z orzecha włoskiego (kolor żywicy do wyboru) 250x90x4',
        ],
        prices: [
          '3300', '3400', '3700', '3800', '4200', '4300'
        ],
        time: [
          '21', '21', '21', '21', '21', '21'
        ]
    },
    {
      id: 3,
      description: 'Wymiary blatu łazienkowego wykonywane są na życzenie klienta, poniżej przykładowe wymiary.',
      types: [
        'blat łazienkowy z dębu lub jesionu (kolor żywicy do wyboru) 90x50x4',
        'blat łazienkowy z z orzecha włoskiego (kolor żywicy do wyboru) 90x50x4',
        'blat łazienkowy z dębu lub jesionu (kolor żywicy do wyboru) 110x60x4',
        'blat łazienkowy z z orzecha włoskiego (kolor żywicy do wyboru) 110x60x4',
        'blat łazienkowy z dębu lub jesionu (kolor żywicy do wyboru) 130x60x4',
        'blat łazienkowy z z orzecha włoskiego (kolor żywicy do wyboru) 130x60x4',
      ],
      prices: [
        '1250', '1300', '1450', '1500', '1650', '1700'
      ],
      time: [
        '21', '21', '21', '21', '21', '21'
      ]
    },
    {
      id: 4,
      description: 'Wymiary blatu kuchennego wykonywane są na życzenie klienta, poniżej przykładowe wymiary.',
      types: [
        'blat kuchenny z dębu lub jesionu (kolor żywicy do wyboru) 250x60x4',
        'blat kuchenny z orzecha włoskiego (kolor żywicy do wyboru) 250x60x4',
        'blat kuchenny z dębu lub jesionu (kolor żywicy do wyboru) 300x60x4',
        'blat kuchenny z orzecha włoskiego (kolor żywicy do wyboru) 300x60x4',
        'blat kuchenny z dębu lub jesionu (kolor żywicy do wyboru) 350x60x4',
        'blat kuchenny z orzecha włoskiego (kolor żywicy do wyboru) 350x60x4',
      ],
      prices: [
        '3000', '3100', '4000', '4100', '5000', '5100'
      ],
      time: [
        '21', '21', '21', '21', '21', '21'
      ]
    },
    {
      id: 5,
      description: '',
      types: [
        'Stolik kawowy z orzecha włoskiego, (kolor żywicy do wyboru). Różne rozmiary na zamówienie według wizualizacji klienta.'
      ],
      prices: [
        '900 - 1500'
      ],
      time: [
        '14'
      ]
    },
    {
      id: 5,
      description: 'Do stołów i stolik wykonujemy nogi:',
      types: [
        'Nogi Typu prostokątnego lub w kształcie litery X połączone w stelaż',
        'Nogi typu „pająk”'
      ],
      prices: [
        'Stoły jadalniane: 400-500zł /n Stoły salonowe: 500-700',
        'Stoły jadalniane: 600-800zł /n Stoły salonowe: 1000-1600',
      ]
    }
  ]
}

export default initialState;