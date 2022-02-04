import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {

  async authenticate(tel: string, password: string): Promise<string> {

    let token: string;



    return 'test';
  }
}
