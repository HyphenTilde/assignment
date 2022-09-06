import { ExpressionType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Username } from '../model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const backendURL = 'http://localhost:3000' ;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  usertest: Username = {username:'', email:'', id:''};

  constructor(private router: Router, private httpclient: HttpClient) {
    
  }

  clickme(){
    this.httpclient.post(backendURL+'/api/auth',this.usertest,httpOptions).subscribe((data: any)=>{
      localStorage.setItem('username',data.username);
      localStorage.setItem('email',data.email);
      localStorage.setItem('id',data.id);
      localStorage.setItem('role',data.role);
      this.router.navigateByUrl('home');
    }
    )
  }
  profile(){
    this.router.navigateByUrl('profile');
  }
  
  ngOnInit(): void {
  }

}
