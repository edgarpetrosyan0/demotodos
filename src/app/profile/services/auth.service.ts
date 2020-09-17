import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegistrationUser } from '../models/registrationuUser';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationService {
    authorizedMessage = false;
    constructor(
        private router: Router
    ) {

    }

    login(username: string, password: string) {
        if (username === 'todo' && password === '12345') {
            sessionStorage.setItem('username', username);
            return this.router.navigate(['/todo']);
        } else {
            this.authorizedMessage = true;
        }
    }
}