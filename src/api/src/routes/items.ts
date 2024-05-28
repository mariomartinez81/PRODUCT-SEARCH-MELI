import { Router } from 'express';
import { getItems, getItemsById } from '../controllers/items/getItem';

const router = Router();

router.get('/', getItems);
router.get('/:id', getItemsById);

export default router;
