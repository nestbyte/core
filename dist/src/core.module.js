"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const common_1 = require("@nestjs/common");
const health_module_1 = require("./features/health/health.module");
const passport_1 = require("@nestjs/passport");
const nestbyte_logger_module_1 = require("./logger/nestbyte-logger/nestbyte-logger.module");
let CoreModule = exports.CoreModule = class CoreModule {
};
exports.CoreModule = CoreModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [health_module_1.HealthModule, passport_1.PassportModule, nestbyte_logger_module_1.NestbyteLoggerModule],
        controllers: [],
        providers: [],
        exports: [],
    })
], CoreModule);
//# sourceMappingURL=core.module.js.map