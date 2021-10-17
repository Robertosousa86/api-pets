import { Request, Response } from 'express';
import * as client from '../services/client';
import { badRequest } from '../libs/bindError';

const list = (req: Request<any>, res: Response<any>) => {
  try {
    const clients = client.list();

    return res.json(clients);
  } catch (error) {
    return badRequest(res, error);
  }
};

const get = (req: Request<any>, res: Response<any>) => {
  const id = req.params.id;

  try {
    if (!id) return res.status(400).json({ message: 'Infome o campo id.' });

    const clientFound = client.get(id);

    res.json(clientFound);
  } catch (error: any) {
    return badRequest(res, error);
  }
};

const create = (req: Request<any>, res: Response<any>) => {
  try {
    const { name, age } = req.body;

    return res.json(client.create({ name, age }));
  } catch (error: any) {
    return badRequest(res, error);
  }
};

const update = (req: Request<any>, res: Response<any>) => {
  try {
    const { id, age, name } = req.body;

    if (!id) return res.status(400).json({ message: 'Infome o campo id.' });

    return res.json(client.update({ id, name, age }));
  } catch (error: any) {
    return badRequest(res, error);
  }
};

const deleteClient = (req: Request<any>, res: Response<any>) => {
  try {
    const { id } = req.body;

    if (!id) return res.status(400).json({ message: 'Infome o campo id.' });

    client.deleteClient(id);

    res.json({ sucess: 'Cliente excluído com sucesso!' });
  } catch (error: any) {
    return badRequest(res, error);
  }
};

export { list, get, create, update, deleteClient };
