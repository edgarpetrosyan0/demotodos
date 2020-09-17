import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
 
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { ProfileModule } from './profile/profile.module';
import { routing } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { AuthenticationService } from './profile/services/auth.service';
import { environment } from 'src/environments/environment';
import { TodoState } from './todo.state';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
   ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    ProfileModule.forRoot(),
    SharedModule.forRoot(),
    NgxsModule.forRoot([TodoState]) ,
    routing
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ 
  AuthenticationService
], 
  bootstrap: [AppComponent]
})
export class AppModule { }
