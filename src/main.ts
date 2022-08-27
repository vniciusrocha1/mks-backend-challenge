import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import 'dotenv/config';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './configs/swagger.config';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = '/api/v1';
    app.setGlobalPrefix(globalPrefix);
    app.useGlobalPipes(new ValidationPipe());
    SwaggerModule.setup(globalPrefix, app, SwaggerModule.createDocument(app, swaggerConfig));
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
