import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NestByteValidationPipe implements PipeTransform {
  constructor() {
    console.log('Hello');
  }
  transform(value: any, metadata: ArgumentMetadata): any {
    console.log('ValidationPipe', value, metadata);
    return undefined;
  }
}
