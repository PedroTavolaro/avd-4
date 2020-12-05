import { Router } from 'express';

import EntregaController from '../app/controllers/EntregaController';

const entregasRouter = Router();

entregasRouter.get('/', EntregaController.index);
entregasRouter.post('/', EntregaController.store);
entregasRouter.delete('/:id', EntregaController.delete);
entregasRouter.put('/:id', EntregaController.update);
entregasRouter.get('/:id', EntregaController.show);

export default entregasRouter;
