import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private recaptchaVerifier: any;
  private firebaseAuth: any;

  constructor() {}

  public async RecaptchaVerifierRender(): Promise<void> {
    const firebaseConfig = null

    initializeApp(firebaseConfig);

    this.firebaseAuth = getAuth();
    this.firebaseAuth.useDeviceLanguage();
    this.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (response: any) => {
          console.log(response);
          console.log('test');
        },
      },
      this.firebaseAuth
    );

  }

  public async submit(): Promise<void> {
    await this.recaptchaVerifier.render();

    

  }
}
