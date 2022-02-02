import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize/types';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstallerModule } from './installer/installer.module';
import { production, development } from 'database/config/database.json';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: <Dialect>'mysql',
    }),
    InstallerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
