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
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.css']
})
export class ShomeComponent implements OnInit {
  username:u_test = {username:''};
  group_array = [];
  usertest:Username = {username:'',email:'',id:''}; 
  constructor(private httpclient:HttpClient) { }
  
  ngOnInit(): void {
    this.username.username = localStorage.getItem('username')!;
    this.httpclient.post(backendURL+'/api/collect',this.username,httpOptions).subscribe((data:any)=>{
      this.group_array = data;
    })
  }
  supercreate(){
    this.httpclient.post(backendURL+'/api/screate',this.usertest,httpOptions).subscribe((data:any)=>{
      alert(data);
    })
  }
  superremove(){
    this.httpclient.post(backendURL+'/api/sremove',this.usertest,httpOptions).subscribe((data:any)=>{
      alert(data);
    })
  }
  superupgrade(){
    this.httpclient.post(backendURL+'/api/supgrade',this.usertest,httpOptions).subscribe((data:any)=>{
      alert(data);
    })
  }
}
