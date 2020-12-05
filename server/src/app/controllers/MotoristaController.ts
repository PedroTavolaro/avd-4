import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import Motorista from '../models/Motorista';

class MotoristaController {
  public async index(request: Request, response: Response): Promise<Response> {
    const motoristasRepository = getRepository(Motorista);
    const motoristas = await motoristasRepository.find({
      select: ['id', 'nome'],
    });

    return response.status(200).json(motoristas);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { nome } = request.body;

    const motoristasRepository = getRepository(Motorista);

    const motoristas = await motoristasRepository.create({ nome });

    await motoristasRepository.save(motoristas);

    return response.status(200).json(motoristas);
  }
}

export default new MotoristaController();
