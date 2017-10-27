import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;

  genders = ['male', 'female'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required), //FormControl 1st arg is default value
      'email': new FormControl(null, [Validators.required, Validators.email]), //use an array as 2nd arg if you want multiple validators
      'gender': new FormControl('female'),
      'hobbies': new FormArray([]) // use FormArray b/c could be one hobby, 5, 10, none
    });                             // we have empty array, but you could do: new FormArray([new FormControl('thing')])
  }

  onSubmit(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control) //need the <FormArray> and parenthesis around it (built-in rule)
  }
}
