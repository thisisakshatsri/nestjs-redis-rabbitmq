import { Injectable } from '@nestjs/common';
import { InjectRedis, Redis } from '@nestjs/redis';
import { RabbitRPC } from '@nestjs-plus/rabbitmq';

@Injectable()
export class AppService {
  constructor(
    @InjectRedis() private readonly redisClient: Redis,
  ) {}

  async cacheData(key: string, value: string): Promise<void> {
    await this.redisClient.set(key, value);
  }

  async getCachedData(key: string): Promise<string | null> {
    return await this.redisClient.get(key);
  }

  @RabbitRPC({
    exchange: 'exchange_name',
    routingKey: 'route_key',
    queue: 'queue_name',
  })
  public async rpcHandler(msg: {}) {
    console.log('Received message:', msg);
  }
}
