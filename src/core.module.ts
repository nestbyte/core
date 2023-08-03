import { Global, Module } from '@nestjs/common';
import { HealthModule } from './features/health/health.module';
import { PassportModule } from '@nestjs/passport';
import { NestbyteLoggerModule } from './logger';

@Global()
@Module({
  imports: [HealthModule, PassportModule, NestbyteLoggerModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class CoreModule {}
