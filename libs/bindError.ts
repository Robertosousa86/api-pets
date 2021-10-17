import { Response } from 'express';

const badRequest = (res: Response<any>, error: any) => {
  return res.status(400).json({ message: error.message });
};

export { badRequest };
