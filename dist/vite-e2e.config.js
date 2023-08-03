"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    test: {
        globals: true,
        cache: {
            dir: 'node_modules/.vitest',
        },
        environment: 'node',
        include: ['test/**/*{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
    },
});
//# sourceMappingURL=vite-e2e.config.js.map