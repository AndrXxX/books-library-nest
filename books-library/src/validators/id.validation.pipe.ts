import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IdValidationPipe implements PipeTransform {
  transform(id: any, metadata: ArgumentMetadata) {
    id = String(id).trim();
    if (!id) {
      throw new Error('id is empty');
    }
    return id;
  }
}
