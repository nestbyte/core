import { Global, Module } from '@nestjs/common';
import { NestbyteLogger } from './nestbyte-logger.service';

@Global()
@Module({
  providers: [NestbyteLogger],
  exports: [NestbyteLogger],
})
export class NestbyteLoggerModule {}
