import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms';
  form: FormGroup;
  submitted: boolean;
  ngOnInit() {
    this.form = new FormGroup({
      'username': new FormControl(null, Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(4)])),
      'fullname': new FormControl(null, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(4)])),
      'age': new FormControl(null,Validators.compose([Validators.required,Validators.pattern('^([1-9]$|[1-9]?[0-9]|100)$')]) ),
      'gender': new FormControl(null, Validators.required),
      // 'male': new FormControl(null, Validators.required),
      // 'female': new FormControl(null, Validators.required),
      // 'others': new FormControl(null, Validators.required),
      'education': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.compose([Validators.required,Validators.pattern('^[a-z0-9_-]{8,15}$')])),
      'password': new FormControl(null,Validators.required)
    });

  }
  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    console.log(this.form.valid);
    // if (this.form.valid) {

    // }
    // else {
    //   this.submitted = true;
    // }
  }
}
