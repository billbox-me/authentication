import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstallerModule } from './installer/installer.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'billbox_authentication',
      synchronize: false,
      autoLoadModels: true,
      logging: true
    }),
    InstallerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
