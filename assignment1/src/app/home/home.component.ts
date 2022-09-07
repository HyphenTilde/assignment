import { ExpressionType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { u_test } from '../model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const backendURL = 'http://localhost:3000' ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:u_test = {username:''};
  group_array = [];
  constructor(private httpclient:HttpClient) { }

  ngOnInit(): void {
    this.username.username = localStorage.getItem('username')!;
    this.httpclient.post(backendURL+'/api/collect',this.username,httpOptions).subscribe((data:any)=>{
      this.group_array = data;
    })
  }

}
