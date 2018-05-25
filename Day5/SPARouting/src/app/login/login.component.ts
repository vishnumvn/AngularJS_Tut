import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    const config = {
      userName : new FormControl('', [Validators.required, Validators.minLength(3)]),
      password : new FormControl('', [Validators.required])

    };

    this.loginForm = new FormGroup(config);
  }

  onSubmit(frm) {
    console.log(this.loginForm.get('userName').value);
    console.log(this.loginForm.get('password').value);
  }

}
