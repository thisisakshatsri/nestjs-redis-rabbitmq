import { Module } from '@nestjs/common';
import { RedisModule } from '@nestjs/redis';
import { RabbitMQModule } from '@nestjs-plus/rabbitmq';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Redis Configuration
    RedisModule.register({
      url: 'redis://localhost:6379', // Redis URL
    }),
    // RabbitMQ Configuration
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'exchange_name',
          type: 'topic',
        },
      ],
      uri: 'amqp://localhost:5672', // RabbitMQ URL
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
