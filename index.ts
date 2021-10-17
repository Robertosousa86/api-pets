import express from 'express';
import cors from 'cors';
import * as client from './controllers/client';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.use(express.static('www'));

app.get('/clients', client.list);

app.get('/clients/:id', client.get);

app.post('/clients', client.create);

app.put('/clients', client.update);

app.delete('/clients', client.deleteClient);

app.listen(PORT, () => {
  console.log(`⚡️[server]: API rodando em http://localhost:${PORT}`);
});
