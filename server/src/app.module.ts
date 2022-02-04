import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize/types';
import { AppController } from './app.controller';
import { InstallerModule } from './installer/installer.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: <Dialect>'mysql',
    }),
    InstallerModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
