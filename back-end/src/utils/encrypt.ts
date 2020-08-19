import bcrypt, { compare } from "bcrypt";

export default new (class Encrypt {
  salt: string;

  constructor() {
    this.salt = String(bcrypt.genSaltSync(10));
  }

  createHash(password: string) {
    const hash = bcrypt.hashSync(password, this.salt);

    return hash;
  }

  compareHash(hash: string, password: string) {
    const comparedHash = bcrypt.compareSync(password, hash);

    return comparedHash;
  }
})();
