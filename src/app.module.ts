import { Module, OnModuleInit, Logger } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'), 
        host: configService.get<string>('DB_HOST') || undefined,
        port: parseInt(configService.get<string>('DB_PORT'), 10) || undefined,
        username: configService.get<string>('DB_USERNAME') || undefined,
        password: configService.get<string>('DB_PASSWORD') || undefined,
        database: configService.get<string>('DB_DATABASE') || undefined,
        synchronize: true,
        logging: true, 
        entities: [__dirname + '/**/*.entity{.ts,.js}'], //
      }),
      inject: [ConfigService], 
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);

  constructor(private readonly connection: Connection) {}

  async onModuleInit() {
    const isConnected = this.connection.isConnected;
    if (isConnected) {
      this.logger.log('Conexão com o banco de dados estabelecida com sucesso!');
    } else {
      this.logger.error('Falha ao conectar com o banco de dados.');
    }
  }
}
