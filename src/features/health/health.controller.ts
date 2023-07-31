import { Controller, Get, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NestbyteLogger } from '../../logger';

@Controller('health')
@ApiTags('Health')
export class HealthController {
  constructor(@Inject(NestbyteLogger) private logger: NestbyteLogger) {
    this.logger.setContext(HealthController.name);
  }

  @Get()
  check() {
    this.logger.log('Health check');
    return {
      status: 'OK',
    };
  }
}
