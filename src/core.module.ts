import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './features/health/health.module';
import { PassportModule } from '@nestjs/passport';

@Global()
@Module({
  imports: [HealthModule, PassportModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class CoreModule {}
