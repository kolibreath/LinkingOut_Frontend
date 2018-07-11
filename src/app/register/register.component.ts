import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../User';

// register view
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  user: User = new User();

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }

    this.userService.registerUser(this.getUser());
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  };


  //todo getCaptach logic
  getCaptcha(): void {
  }


  getUser(): User {
    this.user.username = this.validateForm.get('username').value;
    this.user.password = this.validateForm.get('password').value;
    this.user.tel      = this.validateForm.get('tel').value;
    this.user.email    = this.validateForm.get('email').value;

    return this.user;
  }

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username         : [ null, [ Validators.required ] ],
      password         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
      tel              : [ null, [ Validators.required ] ],
      telPrefix: [ '+86' ],
      email            : [ null, [ Validators.email ] ],
      captcha          : [ null, [ Validators.required ] ],
      agree            : [ false ]
    });
  }
}
