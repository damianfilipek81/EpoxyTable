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
      name: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at blandit tellus. Donec suscipit ipsum eu nulla fringilla feugiat.',
      image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg',
      price: '2000'
    },
    {
      name: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at blandit tellus. Donec suscipit ipsum eu nulla fringilla feugiat.',
      image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg',
      price: '2000'
    },
    {
      name: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at blandit tellus. Donec suscipit ipsum eu nulla fringilla feugiat.',
      image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg',
      price: '2000'
    },
    {
      name: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at blandit tellus. Donec suscipit ipsum eu nulla fringilla feugiat.',
      image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg',
      price: '2000'
    },
    {
      name: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at blandit tellus. Donec suscipit ipsum eu nulla fringilla feugiat.',
      image: 'https://cdn20.pamono.com/p/z/6/9/695063_riaxmaw5zt/river-olive-wood-and-epoxy-resin-table-by-andrea-toffanin-for-w-a-t-1988-4.jpg',
      price: '2000'
    }
  ],
  modal: null,

}

export default initialState;