import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../User';

//login login view
@Component({
  selector: 'app-loginin',
  templateUrl: './loginin.component.html',
  styleUrls: ['./loginin.component.css']
})
export class LogininComponent implements OnInit {
  validateForm: FormGroup;

  user: User = new User();
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }

    //登录逻辑
    this.userService.loginUser(this.getUser());
  }

  constructor(private fb: FormBuilder, private userService:UserService) {
  }

  getUser(): User {
    this.user.tel = this.validateForm.get('tel').value;
    this.user.password = this.validateForm.get('password').value;

    return this.user;
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      tel: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
}
