import { Test, TestingModule } from '@nestjs/testing';
import { NestbyteLogger } from './nestbyte-logger.service';
import { describe, it, expect, beforeEach } from 'vitest';

describe('NestbyteLoggerService', () => {
  let service: NestbyteLogger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestbyteLogger],
    }).compile();

    service = await module.resolve<NestbyteLogger>(NestbyteLogger);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
