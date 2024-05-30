import request from 'supertest';
import { app } from '../app';
import { Server } from 'http';

import {
  getItemByIdExternalApi,
  getDescriptionItemByIdExternalApi,
  getCategoryById,
} from '../utils/helpers';

jest.mock('../utils/helpers', () => ({
  getItemByIdExternalApi: jest.fn(),
  getDescriptionItemByIdExternalApi: jest.fn(),
  getCategoryById: jest.fn(),
}));

describe('GET /items/:id', () => {
  let server: Server;

  beforeAll((done) => {
    server = app.listen(3006, () => {
      done();
    });
  });

  afterAll((done) => {
    server.close(() => {
      done();
    });
  });
  test('should respond with a 200 status code and the item details', async () => {
    const mockItemFound = {
      id: '1',
      title: 'Item 1',
      price: 10,
      thumbnail: 'thumbnail1.jpg',
      condition: 'new',
      shipping: { free_shipping: true },
      initial_quantity: 10,
      currency_id: 'USD',
      category_id: '1',
    };

    const mockItemDescription = {
      plain_text: 'Item description',
    };
    const mockCategory = {
      path_from_root: [{ id: '1', name: 'Category 1' }],
    };

    (getItemByIdExternalApi as jest.Mock).mockResolvedValue(mockItemFound);
    (getDescriptionItemByIdExternalApi as jest.Mock).mockResolvedValue(
      mockItemDescription,
    );
    (getCategoryById as jest.Mock).mockResolvedValue(mockCategory);

    const response = await request(app).get('/api/items/1').send();
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
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
    });
  });

  test('should respond with a 500 status code and error message on failure', async () => {
    (getItemByIdExternalApi as jest.Mock).mockRejectedValue(
      new Error('API error'),
    );

    const response = await request(app).get('/api/items/1').send();

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      author: expect.any(Object),
      message: 'Internal server error',
    });
  });
});
