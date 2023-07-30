import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './features/health/health.module';
import { PassportModule } from '@nestjs/passport';
import { NestbyteLoggerModule } from './logger/nestbyte-logger/nestbyte-logger.module';

@Global()
@Module({
  imports: [HealthModule, PassportModule, NestbyteLoggerModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class CoreModule {}
