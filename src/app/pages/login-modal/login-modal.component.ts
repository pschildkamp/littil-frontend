import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IModalComponent } from '../../components/modal/modal.controller';

@Component({
  selector: 'littil-login-modal',
  templateUrl: 'login-modal.component.html',
})
export class LoginModalComponent
  implements IModalComponent<undefined, ILoginModalInput>
{
  loading = false;
  public type!: LoginType;
  LoginType = LoginType;

  public onOpen(data: ILoginModalInput): void {
    this.type = data.type;
  }

  close!: () => undefined;
  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public onClickLogin() {
    console.log('forms', this.form.value);
  }
  public onClickCancel() {
    this.close();
  }
}

export interface ILoginModalInput {
  type: LoginType;
}

export enum LoginType {
  Login = 'login',
  Register = 'register',
}
