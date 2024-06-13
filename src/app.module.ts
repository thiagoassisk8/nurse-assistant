
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Module, OnModuleInit, Logger } from '@nestjs/common';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'lumi_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);

  constructor(private readonly connection: Connection) {}

  async onModuleInit() {
    const isConnected = this.connection.isInitialized;
    if (isConnected) {
      this.logger.log('Conexão com o banco de dados estabelecida com sucesso!');
    } else {
      this.logger.error('Falha ao conectar com o banco de dados.');
    }
  }
}
