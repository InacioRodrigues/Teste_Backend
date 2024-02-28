"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_config_1 = require("./config/docs/swagger-config");
const http_exce__o_filter_1 = require("./errors/http-exce\u00E7\u00E3o.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new http_exce__o_filter_1.HttpExceptionFilter());
    (0, swagger_config_1.swaggerConfig)(app);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map