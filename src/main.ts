import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const NEST_PORT = process.env.NEST_PORT;
  await app.listen(NEST_PORT, () =>
    console.log(`App started on port ${NEST_PORT}`),
  );
}
bootstrap();
