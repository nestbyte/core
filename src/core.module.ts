import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './features/health/health.module';
import { PassportModule } from '@nestjs/passport';
import { APP_PIPE } from '@nestjs/core';
import { NestByteValidationPipe } from './pipes/nest-byte-validation.pipe';

@Global()
@Module({
  imports: [HealthModule, PassportModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: NestByteValidationPipe,
    },
  ],
  exports: [],
})
export class CoreModule {}
