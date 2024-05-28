import express from 'express';
import items from './items';

const routerApi = (app: any) => {
  const router = express.Router();
  app.use('/api', router);
  router.use('/items', items);
};

export default routerApi;
