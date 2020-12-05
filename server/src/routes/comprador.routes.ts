import { Router } from 'express';

import CompradorController from '../app/controllers/CompradorController';

const compradoresRouter = Router();

compradoresRouter.get('/', CompradorController.index);
compradoresRouter.get('/:comprador_id', CompradorController.show);
compradoresRouter.post('/', CompradorController.store);

export default compradoresRouter;
