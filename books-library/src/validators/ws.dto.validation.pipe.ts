import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { WsException } from "@nestjs/websockets";
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class WsDtoValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new WsException(`Validation failed: ${this.collectMessages(errors).join(', ')}`);
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  private collectMessages(errors: ValidationError[]) {
    const result: string[] = [];
    errors.forEach(error => {
      for (let key in error.constraints) {
        if (typeof error.constraints[key] === "string") {
          result.push(error.constraints[key])
        }
      }
    })
    return result;
  }
}
