import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userName = '';
  public password: string; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: AuthenticationService,

  ) { 

  }

  ngOnInit(): void {
    
  }

  login(){
    if(!this.service.authorizedMessage){
      this.service.login(this.userName, this.password);
    } else{
      return;
    }
  
  }

  registrationPage(){
    this.router.navigate(['profile/registration']);
  }
}
