import { Request, Response } from "express";

import db from "../database/connection";
import Encrypt from "../utils/encrypt";

export default class UsersController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const trx = await db.transaction();

    try {
      console.log({ name, email, password });
      const hasha =
        "$2b$10$WcUZi1A400Y1fb3bJGDfseCeWXist3ug9chfr.CMmS0idkW5HaC9";

      const hash = Encrypt.compareHash(password, hasha);

      console.log(hash);
    } catch (error) {
      console.log(error);
    }
  }
}
