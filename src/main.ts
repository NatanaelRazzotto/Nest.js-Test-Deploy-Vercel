import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: ['http://localhost:3000', 'https://www.entusiastadamobilidade.com.br'], // ou '*' para permitir todas as origens
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, // Se precisar enviar cookies ou credenciais
  };

  app.enableCors(corsOptions); // Habilita CORS com essas opções

  await app.listen(3000);
}
bootstrap();