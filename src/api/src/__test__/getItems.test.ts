import request from 'supertest';
import { app } from '../app';
import { getItemsFromExternalApi } from '../utils/helpers';
import { Server } from 'http';

jest.mock('../utils/helpers', () => ({
  getItemsFromExternalApi: jest.fn(),
}));

describe('GET /items', () => {
  let server: Server;

  beforeAll((done) => {
    server = app.listen(0, () => {
      done();
    });
  });

  afterAll((done) => {
    server.close(() => {
      done();
    });
  });

  test('should respond with a 200 status code and formatted items', async () => {
    const mockItemsFound = {
      results: [
        {
          id: '1',
          title: 'Item 1',
          price: 10,
          thumbnail: 'thumbnail1.jpg',
          condition: 'new',
          shipping: { free_shipping: true },
          initial_quantity: 10,
          currency_id: 'USD',
        },
        {
          id: '2',
          title: 'Item 2',
          price: 20,
          thumbnail: 'thumbnail2.jpg',
          condition: 'used',
          shipping: { free_shipping: false },
          initial_quantity: 5,
          currency_id: 'USD',
        },
      ],
      filters: [
        {
          id: 'category',
          values: [
            {
              path_from_root: [{ name: 'Category 1' }, { name: 'Category 2' }],
            },
          ],
        },
      ],
    };

    (getItemsFromExternalApi as jest.Mock).mockResolvedValue(mockItemsFound);

    const response = await request(app).get('/api/items').send();
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      author: {
        name: 'Mario',
        lastName: 'Martinez',
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
    });
  });

  test('should respond with a 500 status code and error message on failure', async () => {
    (getItemsFromExternalApi as jest.Mock).mockRejectedValue(
      new Error('API error'),
    );

    const response = await request(app).get('/api/items').send();

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      author: expect.any(Object),
      message: 'Internal server error',
    });
  });
});
