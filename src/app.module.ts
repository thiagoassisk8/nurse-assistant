import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DB_DATABASE_URL'),
        ssl: {
          rejectUnauthorized: true,
          ca: configService.get<string>('DB_CA_CERT'),
        },
        synchronize: false,
        logging: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
