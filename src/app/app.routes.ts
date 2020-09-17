import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './profile/components/login/login.component';
import { ProfileComponent } from './profile/components/profile.component';
import { RegistrationComponent } from './profile/components/registration/registration.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'todo', component: TodolistComponent},
  {
    path: 'profile',
    component: ProfileComponent, 
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent,  },
      { path: 'registration', component: RegistrationComponent,  },
    ]
  },
  
];

export const routing = RouterModule.forRoot(routes);
