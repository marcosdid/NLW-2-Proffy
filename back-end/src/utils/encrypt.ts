import bcrypt from "bcrypt";

export default class Encrypt {
  salt: number;

  constructor() {
    this.salt = 10;
  }

  async createHash(password: string) {
    const hash = await bcrypt.hash(password, this.salt);

    return hash;
  }

  async compareHash(password: string, hash: string) {
    const comparedHash = await bcrypt.compare(password, hash);

    return comparedHash;
  }
}
