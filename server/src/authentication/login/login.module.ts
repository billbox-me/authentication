import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OptionsModel } from 'src/models/options.model';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  controllers: [LoginController],
  imports: [
    SequelizeModule.forFeature([
      OptionsModel
    ])
  ],
  providers: [LoginService],
})
export class LoginModule {}
