import { Request, Response } from "express";

import db from "../database/connection";
import Encrypt from "../utils/encrypt";

const Encrypted = new Encrypt();

export default class UsersController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const trx = await db.transaction();

    try {
      const passwordHash = await Encrypted.createHash(password);

      const user = await trx("users").insert({
        name,
        email,
        password: passwordHash,
      });

      await trx.commit();
      return res.status(201).json(user[0]);
    } catch (error) {
      return (
        res.status(400).json({
          error: "create user error",
        }),
        console.log(error)
      );
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const users = await db("users").where({ email });
      const user = users[0];

      const comparedUser = await Encrypted.compareHash(password, user.password);

      if (!comparedUser) {
        return res.status(400).json({
          error: "wrong password",
        });
      }

      return res.status(200).json(user.id);
    } catch (error) {
      return res.status(400).json({
        error: "user not found",
      });
    }
  }
}
