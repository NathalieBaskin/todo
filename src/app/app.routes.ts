import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { TaskDetailsComponent } from './routes/task-details/task-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
];
