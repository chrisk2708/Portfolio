import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule ,Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  private fb = inject(FormBuilder)

  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.maxLength(200)]],
    privacyPolicy: [false, [Validators.requiredTrue]]
  });

  get name() {
    return this.userForm.get('name');
  }
  get email() {
    return this.userForm.get('email');
  }
  get message() {
    return this.userForm.get('message');
  }
  get privacyPolicy() {
    return this.userForm.get('privacyPolicy');
  }

  formSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
