import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {

  const httpsOptions = {
  key: fs.readFileSync('/etc/ssl/localhost/localhost.key'),
  cert: fs.readFileSync('/etc/ssl/localhost/localhost.crt'),
};
  


  const app = await NestFactory.create(AppModule, {
  httpsOptions,
});

  const config = new DocumentBuilder()
    .setTitle('TSD BackEnd')
    .setDescription('Delivery management')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3200);
}
bootstrap();
