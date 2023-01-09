import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rolemodifer',
  templateUrl: './rolemodifer.component.html',
  styleUrls: ['./rolemodifer.component.css']
})
export class RolemodiferComponent {
  constructor(private http:HttpClient,private router: Router) {}
}
