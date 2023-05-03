import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });

    this.registerForm
      .get('confirmPassword')
      ?.setValidators([
        Validators.required,
        this.passwordMatchValidator(this.registerForm.get('password')!),
      ]);
  }

  passwordMatchValidator(passwordControl: AbstractControl): ValidatorFn {
    return (
      confirmPasswordControl: AbstractControl
    ): { [key: string]: boolean } | null => {
      if (
        !passwordControl ||
        !confirmPasswordControl ||
        passwordControl.value === confirmPasswordControl.value
      ) {
        return null;
      } else {
        return { mismatch: true };
      }
    };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
    }
  }
}
