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
      useFactory: async (configService: ConfigService) => {
        const databaseUrl = configService.get<string>('DB_DATABASE_URL');
        
        return {
          type: 'postgres',
          url: databaseUrl || undefined,
          host: !databaseUrl ? configService.get<string>('DB_HOST') : undefined,
          port: !databaseUrl ? configService.get<number>('DB_PORT') : undefined,
          username: !databaseUrl ? configService.get<string>('DB_USERNAME') : undefined,
          password: !databaseUrl ? configService.get<string>('DB_PASSWORD') : undefined,
          database: !databaseUrl ? configService.get<string>('DB_DATABASE') : undefined,
          synchronize: false,
          logging: true,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
