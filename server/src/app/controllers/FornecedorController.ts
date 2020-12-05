import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import Fornecedor from '../models/Fornecedor';

class FornecedorController {
  public async index(request: Request, response: Response): Promise<Response> {
    const fornecedoresRepository = getRepository(Fornecedor);
    const fornecedores = await fornecedoresRepository.find({
      select: ['id', 'nome'],
    });

    return response.status(200).json(fornecedores);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { nome } = request.body;

    const fornecedoresRepository = getRepository(Fornecedor);

    const fornecedores = await fornecedoresRepository.create({ nome });

    await fornecedoresRepository.save(fornecedores);

    return response.status(200).json(fornecedores);
  }
}

export default new FornecedorController();
