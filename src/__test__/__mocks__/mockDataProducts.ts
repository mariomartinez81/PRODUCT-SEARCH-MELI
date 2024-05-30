export const allProductsMockData = {
  author: {
    name: 'Mario',
    lastname: 'Martinez',
  },
  categories: ['Category 1', 'Category 2'],
  items: [
    {
      id: '1',
      title: 'Item 1',
      price: {
        currency: 'USD',
        amount: 10,
        decimals: 0,
      },
      picture: 'thumbnail1.jpg',
      condition: 'new',
      free_shipping: true,
    },
    {
      id: '2',
      title: 'Item 2',
      price: {
        currency: 'USD',
        amount: 20,
        decimals: 0,
      },
      picture: 'thumbnail2.jpg',
      condition: 'used',
      free_shipping: false,
    },
  ],
};

export const productMockData = {
  author: {
    name: 'Mario',
    lastname: 'Martinez',
  },
  categories: ['Category 1'],
  item: {
    id: '1',
    title: 'Item 1',
    price: {
      currency: 'USD',
      amount: 10,
      decimals: 2,
    },
    picture: 'thumbnail1.jpg',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 10,
    description: 'Item description',
  },
};
