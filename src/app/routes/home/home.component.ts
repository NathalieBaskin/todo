import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Person } from '../../types/Person';
import { Task } from '../../types/Task';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  heading = 'Todo App v1.0';

  // TODO: Hämta detta från backend
  tasks: Task[] = [
    {
      id: 1,
      title: 'Storhandla',
      description: 'Description for Task 1',
      done: false,
    },
  ];
}

