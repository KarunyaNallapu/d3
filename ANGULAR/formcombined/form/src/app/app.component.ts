import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form';
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('^[a-z0-9_-]{8,15}$')])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9@#]{8,15}$')])],
      email: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', Validators.required]
      }),
      alternateEmails: this.fb.array([])
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }


  onSubmit() {
    console.log(this.registrationForm.value);

  }

}
