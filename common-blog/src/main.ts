import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {ValidationPipe} from '@nestjs/common';
import * as mongo from 'mongoose';

async function bootstrap() {
    mongo.connect('mongodb://127.0.0.1:27017/test', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());

    const options = new DocumentBuilder()
        .setTitle('nest-blog-api')
        .setDescription('The nest-blog API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs', app, document);
    await app.listen(5000);
}

bootstrap();
