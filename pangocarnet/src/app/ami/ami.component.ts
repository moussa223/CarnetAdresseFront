import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {RoleService} from "../role.service";
import {AmiService} from "../ami.service";

@Component({
  selector: 'app-ami',
  templateUrl: './ami.component.html',
  styleUrls: ['./ami.component.css']
})
export class AmiComponent implements OnInit{
  //pangolin = { name:'',role: '' };
  pangolin: any[] = []
  pangolinlogin : any;
  constructor(private http:HttpClient,private router: Router,private roleService:RoleService,private amiService:AmiService) {}

  ngOnInit() {
    this.pangolinlogin = localStorage.getItem('login')
    this.roleService.getRoleDetails().subscribe((res)=>{
        console.log(res)
      this.pangolin = res
      },
      error => console.log(error)
    );
  }
  addFriend(login:string,amiLogin:string){
      this.amiService.addFriend(this.pangolinlogin,amiLogin).subscribe(response=>{
        console.log(response)
        localStorage.clear()
        alert('Ami ajouté, Veuillez vous reconnecter pour voir vos amis')
        this.router.navigate(['/login'])
      })

  }
}
