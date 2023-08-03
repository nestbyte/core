import { NestbyteLogger } from '../../logger';
export declare class HealthController {
    private logger;
    constructor(logger: NestbyteLogger);
    check(): {
        status: string;
    };
}
