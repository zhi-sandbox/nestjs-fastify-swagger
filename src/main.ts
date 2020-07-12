import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const options = new DocumentBuilder()
    .setTitle('Test Project')
    .setDescription('')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);  
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(4000);
}
bootstrap();
