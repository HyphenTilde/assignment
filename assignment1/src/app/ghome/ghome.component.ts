import { ExpressionType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { u_test, Username } from '../model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const backendURL = 'http://localhost:3000' ;

@Component({
  selector: 'app-ghome',
  templateUrl: './ghome.component.html',
  styleUrls: ['./ghome.component.css']
})
export class GhomeComponent implements OnInit {
  username:u_test = {username:''};
  usertest:Username = {username:'',id:'',email:''};
  group_array = [];
  constructor(private httpclient:HttpClient) { }

  ngOnInit(): void {
    this.username.username = localStorage.getItem('username')!;
    this.httpclient.post(backendURL+'/api/collect',this.username,httpOptions).subscribe((data:any)=>{
      this.group_array = data;
    })
  }
  groupcreate(){
    this.httpclient.post(backendURL+'/api/gcreate',this.usertest,httpOptions).subscribe((data:any)=>{

    })
  }
  addusergroup(){
    this.httpclient.post(backendURL+'/api/gadduser',this.usertest,httpOptions).subscribe((data:any)=>{

    })
  }
  removeusergroup(){
    this.httpclient.post(backendURL+'/api/gremoveuser',this.usertest,httpOptions).subscribe((data:any)=>{

    })
  }
  removegroup(){
    this.httpclient.post(backendURL+'/api/gremovegroup',this.usertest,httpOptions).subscribe((data:any)=>{
      
    })
  }
}
