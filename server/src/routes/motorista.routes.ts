import { Router } from 'express';

import MotoristaController from '../app/controllers/MotoristaController';

const motoristasRouter = Router();

motoristasRouter.get('/', MotoristaController.index);
// doctorsRouter.get('/:doctor_id', DoctorController.show);
motoristasRouter.post('/', MotoristaController.store);

export default motoristasRouter;
