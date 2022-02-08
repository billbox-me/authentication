import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './home.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  validateForm!: FormGroup;
  validateUsername = 'Please input your username!';
  validatePassword = 'Please input your password!';
  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private nzMessage: NzMessageService
  ) {}

  async submitForm(): Promise<void> {
    if (this.validateForm.valid) {
      this.homeService.submit();
      return;
    }

    this.nzMessage.error('Please input your phone and password!');
  }

  ngOnInit(): void {
    this.homeService.RecaptchaVerifierRender();

    this.validateForm = this.fb.group({
      phone: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
}
