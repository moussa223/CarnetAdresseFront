import { Component, OnInit} from '@angular/core';
import {RoleService} from "../role.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit{
  pangolin = { role: '' };
  pangolinRole : any;
  constructor(private roleService:RoleService,private authService:AuthService) {}
  ngOnInit() {
    this.roleService.getRoleDetails().subscribe((res)=>{
      console.log(res)
      console.log(this.authService.getToken())
       // console.log(this.authService.getCurrentUserRole())
      this.pangolin = res;
      this.pangolinRole = localStorage.getItem('role')
      console.log(this.pangolinRole)

      },
      error => console.log(error)
      );
  }
}
