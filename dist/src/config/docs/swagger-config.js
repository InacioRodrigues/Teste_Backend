"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
const swaggerConfig = (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API documentation')
        .setDescription('The api  description ')
        .setVersion('0.0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
};
exports.swaggerConfig = swaggerConfig;
//# sourceMappingURL=swagger-config.js.map