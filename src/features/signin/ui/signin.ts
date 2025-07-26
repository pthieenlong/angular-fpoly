import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  imports: [FormsModule, NgIf],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
  user = {
    username: '',
    password: ''
  }

  onSubmit() {
    console.warn('Thông tin đăng nhập: ', this.user)
  }
}
