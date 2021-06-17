import { settings } from '../settings';

const initialState = {
  home: [
    { image: settings.home },
  ],
  gallery: [
    { image: settings.products.salon },
    { image: settings.products.kuchnia },
    { image: settings.products.galleryOne },
    { image: settings.products.galleryTwo },
    { image: settings.products.galleryThree },
    { image: settings.products.gallerySix },
    { image: settings.products.gallerySeven },
    { image: settings.products.galleryEight },
    { image: settings.products.galleryNine },


  ],
  products: [
    {
      name: 'Blaty stołów jadalnianych',
      description: 'Zabezpieczane olejowoskiem z atestem spożywczym lub lakierem do kontaktu z żywnością.',
      image: settings.products.jadalnia,
      priceOne: '1800',
      id: 1
    },
    {
      name: 'Blaty stołów salonowych',
      description: 'Zabezpieczane olejowoskiem lub lakierem. Możliwość zabezpieczenia olejowoskiem z atestem spożywczym lub lakierem do kontaktu z żywnością',
      image: settings.products.salon,
      priceOne: '3300',
      id: 2
    },
    {
      name: 'Blaty łazienkowe',
      description: 'Zabezpieczane lakierem wodoodpornym.',
      image: settings.products.lazienka,
      priceOne: '1250',
      id: 3
    },
    {
      name: 'Blaty kuchenne',
      description: 'Zabezpieczane olejowoskiem z atestem spożywczym lub lakierem do kontaktu z żywnością.',
      image: settings.products.kuchnia,
      priceOne: '3800',
      id: 4
    },
    {
      name: 'Stoliki kawowe',
      description: 'Zabezpieczane olejowoskiem lub lakierem. Możliwość zabezpieczenia olejowoskiem z atestem spożywczym lub lakierem do kontaktu z żywnością.',
      image: settings.products.kawowy,
      priceOne: '900',
      id: 5
    },
    {
      name: 'Nogi',
      description: '',
      image: settings.products.nogi,
      priceOne: '500',
      id: 6
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
      priceChange: 'Podane ceny są orientacyjne, każdy stół wyceniamy indywidualnie, w celu zakupu prosimy o kontakt.',
      description: 'Wymiary blatu jadalnianego wykonywane są na życzenie klienta, poniżej przykładowe wymiary.',
      products: [
        {name: 'blat jadalniany z dębu (kolor żywicy do wyboru) 110x70x4', priceOne: '1800', priceTwo: '2100', priceThree: '2500', date: '21'},
        {name: 'blat jadalniany z orzecha włoskiego (kolor żywicy do wyboru) 110x70x4', priceOne: '1900', priceTwo: '2200', priceThree: '2600', date: '21'},
        {name: 'blat jadalniany z dębu (kolor żywicy do wyboru) 130x80x4', priceOne: '2050', priceTwo: '2350', priceThree: '2750', date: '21'},
        {name: 'blat jadalniany z orzecha włoskiego (kolor żywicy do wyboru) 130x80x4', priceOne: '2150', priceTwo: '2450', priceThree: '2850', date: '21'},
        {name: 'blat jadalniany z dębu (kolor żywicy do wyboru) 150x90x4', priceOne: '2300', priceTwo: '2600', priceThree: '3000', date: '21'},
        {name: 'blat jadalniany z orzecha włoskiego (kolor żywicy do wyboru) 150x90x4', priceOne: '2400', priceTwo: '2700', priceThree: '3100', date: '21'},
        {name: 'blat jadalniany z dębu (kolor żywicy do wyboru) 170x90x4', priceOne: '2550', priceTwo: '2850', priceThree: '3250', date: '21'},
        {name: 'blat jadalniany z orzecha włoskiego (kolor żywicy do wyboru) 170x90x4', priceOne: '2650', priceTwo: '2950', priceThree: '3350', date: '21'},
      ],
    },
    {
      id: 2,
      priceChange: 'Podane ceny są orientacyjne, każdy stół wyceniamy indywidualnie, w celu zakupu prosimy o kontakt.',
      description: 'Wymiary blatu salonowego wykonywane są na życzenie klienta, poniżej przykładowe wymiary.',
        products: [
          {name: 'blat salonowy z dębu lub jesionu (kolor żywicy do wyboru) 200x90x4', priceOne: '3300', priceTwo: '3700', priceThree: '4200', date: '21'},
          {name: 'blat salonowy z z orzecha włoskiego (kolor żywicy do wyboru) 200x90x4', priceOne: '3400', priceTwo: '3800', priceThree: '4300', date: '21'},
          {name: 'blat salonowy z dębu lub jesionu (kolor żywicy do wyboru) 225x100x4', priceOne: '3700', priceTwo: '4100', priceThree: '4600', date: '21'},
          {name: 'blat salonowy z z orzecha włoskiego (kolor żywicy do wyboru) 225x100x4', priceOne: '3800', priceTwo: '4200', priceThree: '4700', date: '21'},
          {name: 'blat salonowy z dębu lub jesionu (kolor żywicy do wyboru) 250x90x4', priceOne: '4200', priceTwo: '4600', priceThree: '5100', date: '21'},
          {name: 'blat salonowy z z orzecha włoskiego (kolor żywicy do wyboru) 250x90x4', priceOne: '4300', priceTwo: '4700', priceThree: '5200', date: '21'},
        ],
    },
    {
      id: 3,
      priceChange: 'Podane ceny są orientacyjne, każdy stół wyceniamy indywidualnie, w celu zakupu prosimy o kontakt.',
      description: 'Wymiary blatu łazienkowego wykonywane są na życzenie klienta, poniżej przykładowe wymiary.',
      products: [
        {name: 'blat łazienkowy z dębu lub jesionu (kolor żywicy do wyboru) 90x50x4', priceOne: '1250', priceTwo: '1450', priceThree: '1650', date: '21'},
        {name: 'blat łazienkowy z z orzecha włoskiego (kolor żywicy do wyboru) 90x50x4', priceOne: '1300', priceTwo: '1500', priceThree: '1700', date: '21'},
        {name: 'blat łazienkowy z dębu lub jesionu (kolor żywicy do wyboru) 110x60x4', priceOne: '1450', priceTwo: '1650', priceThree: '1850', date: '21'},
        {name: 'blat łazienkowy z z orzecha włoskiego (kolor żywicy do wyboru) 110x60x4', priceOne: '1500', priceTwo: '1700', priceThree: '1900', date: '21'},
        {name: 'blat łazienkowy z dębu lub jesionu (kolor żywicy do wyboru) 130x60x4', priceOne: '1650', priceTwo: '1850', priceThree: '2050', date: '21'},
        {name: 'blat łazienkowy z z orzecha włoskiego (kolor żywicy do wyboru) 130x60x4', priceOne: '1700', priceTwo: '1900', priceThree: '2100', date: '21'},
      ],
    },
    {
      id: 4,
      priceChange: 'Podane ceny są orientacyjne, każdy stół wyceniamy indywidualnie, w celu zakupu prosimy o kontakt.',
      description: 'Wymiary blatu kuchennego wykonywane są na życzenie klienta, poniżej przykładowe wymiary.',
      products: [
        {name: 'blat kuchenny z dębu lub jesionu (kolor żywicy do wyboru) 250x60x4', priceOne: '3800', priceTwo: '4200', priceThree: '4700', date: '21'},
        {name: 'blat kuchenny z orzecha włoskiego (kolor żywicy do wyboru) 250x60x4', priceOne: '4000', priceTwo: '4400', priceThree: '4900', date: '21'},
        {name: 'blat kuchenny z dębu lub jesionu (kolor żywicy do wyboru) 300x60x4', priceOne: '4200', priceTwo: '4600', priceThree: '5100', date: '21'},
        {name: 'blat kuchenny z orzecha włoskiego (kolor żywicy do wyboru) 300x60x4', priceOne: '4400', priceTwo: '4800', priceThree: '5200', date: '21'},
        {name: 'blat kuchenny z dębu lub jesionu (kolor żywicy do wyboru) 350x60x4', priceOne: '4600', priceTwo: '5000', priceThree: '5500', date: '21'},
        {name: 'blat kuchenny z orzecha włoskiego (kolor żywicy do wyboru) 350x60x4', priceOne: '4800', priceTwo: '5200', priceThree: '5700', date: '21'},
      ],
    },
    {
      id: 5,
      priceChange: 'Podane ceny są orientacyjne, każdy stół wyceniamy indywidualnie, w celu zakupu prosimy o kontakt.',
      description: '',
      products: [
        {name: 'Stolik kawowy z orzecha włoskiego, (kolor żywicy do wyboru). Różne rozmiary na zamówienie według wizualizacji klienta.', priceOne: '900 - 1500', date: '14'}
      ],
    },
    {
      id: 6,
      priceChange: 'Podane ceny są orientacyjne, każdy stół wyceniamy indywidualnie, w celu zakupu prosimy o kontakt.',
      description: 'Do stołów i stolik wykonujemy nogi:',
      products: [
        {name: 'Nogi Typu prostokątnego lub w kształcie litery X połączone w stelaż', priceOne: 'Stoły jadalniane: 500-600, Stoły salonowe: 600-800', date:'-'},
        {name: 'Nogi typu „pająk”', priceOne: 'Stoły jadalniane: 900-1100, Stoły salonowe: 1100-1700', date: '-'}
      ],
    }
  ]
}

export default initialState;