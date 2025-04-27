import { Component } from '@angular/core';
import { DUMMY__USERS } from './dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY__USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY__USERS[randomIndex]
}
