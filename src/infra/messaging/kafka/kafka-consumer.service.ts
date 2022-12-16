import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['central-firefly-13560-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y2VudHJhbC1maXJlZmx5LTEzNTYwJFqUbsSj_omyNEOLPI3XKygH46_pqU3OO-I',
          password:
            '8TNBnYnA69td1Cvgy_U8omHRwOjtWwDflYzNrkl49FPJsfHwrgaBNLHnGuOAVeEkf7CAnw==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
