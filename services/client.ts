import { IClient } from '../types/IClient';
import { v4 as uuidv4 } from 'uuid';

const clients: Array<IClient> = [];

const create = (client: IClient) => {
  if (!client.name) throw new Error('Informe o campo nome.');

  if (!client.age) throw new Error('Informe o campo idade.');

  client.id = uuidv4();

  clients.push(client);

  return client;
};

const get = (id: string) => {
  if (!id) throw new Error('Informe o campo id.');

  const client = clients.find((n) => n.id === id);

  if (!client) throw new Error('Nenhum usuário encontrado com esse id.');

  return client;
};

const list = () => {
  if (list.length === 0) throw new Error('A lista de clientes está vazia.');

  return clients;
};

const update = (client: IClient) => {
  if (!client.id) throw new Error('Informe o campo id.');

  const clientFound = clients.find((n) => n.id === client.id);

  if (!clientFound) throw new Error('Nenhum usuário encontrado com esse id.');

  if (!client.name) throw new Error('Informe o campo nome.');

  if (!client.age) throw new Error('Informe o campo idade.');

  for (const clientObject of clients) {
    if (clientObject.id === client.id) {
      clientObject.name = client.name;
      clientObject.age = client.age;
    }
  }

  return clientFound;
};

const deleteClient = (id: string) => {
  if (!id) throw new Error('Informe o campo id!');

  const client = clients.find((n) => n.id === id);

  if (!client) throw new Error('Nenhum usuário encontrado com esse id!');

  for (const index in clients) {
    if (clients[index].id === id) {
      clients.splice(Number(index), 1);
    }
  }

  return true;
};

export { create, get, list, update, deleteClient };
