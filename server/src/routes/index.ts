import { Router } from 'express';

import compradoresRouter from './comprador.routes';
import fornecedoresRouter from './fornecedor.routes';
import motoristasRouter from './motorista.routes';
import entregasRouter from './entrega.routes';

const routes = Router();

routes.use('/compradores', compradoresRouter);
routes.use('/fornecedores', fornecedoresRouter);
routes.use('/motoristas', motoristasRouter);
routes.use('/entregas', entregasRouter);

export default routes;
