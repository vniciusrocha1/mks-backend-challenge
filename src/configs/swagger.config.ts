import { DocumentBuilder } from '@nestjs/swagger';
export const swaggerConfig = new DocumentBuilder()
    .setTitle('mks-backend-challenge - @vniciusrocha1')
    .setDescription('Swagger documentatios for mks-backend-challenge')
    .setVersion('1.0')
    .build();
