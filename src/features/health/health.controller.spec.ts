import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { beforeEach, describe, expect, it } from 'vitest';
import { NestbyteLogger, NestbyteLoggerModule } from '../../logger';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NestbyteLoggerModule],
      controllers: [HealthController],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Health [/health]', () => {
    describe('when called', () => {
      it('should respond with OK', () => {
        expect(controller.check()).toEqual({ status: 'OK' });
      });
    });
  });
});
