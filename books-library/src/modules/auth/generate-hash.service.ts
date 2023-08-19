import { Injectable } from "@nestjs/common";
import { hashSync, compareSync } from "bcrypt-ts"

const saltRounds = 10;

@Injectable()
export class GenerateHashService {

  isValid(password, hash) {
    return compareSync(password, hash);
  }

  generate(password) {
    if (!password) {
      throw new Error("Пароль не может быть пустым");
    }
    return hashSync(password, saltRounds);
  }
}
