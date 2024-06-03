import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountryCodePipe } from '../../pipes/country-code.pipe';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, CountryCodePipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  name = 'user 1';
  age = 10;
  salary = 50000;

  isButtonDisabled = true;
  inputValue = 'Enter your name';

  phoneNumber = "123456789"

  users = [
    {
      name: 'ramesh',
      age: 10,
      salary: 40000,
    },
    {
      name: 'suresh',
      age: 15,
      salary: 50000,
    },
    {
      name: 'subham',
      age: 20,
      salary: 100000,
    },
  ];

  onChangeHandler(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }

  onChangeHaldler1(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }
}
