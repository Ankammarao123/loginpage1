import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private index:IndexService) { }
  loginform:FormGroup
  ngOnInit() {
    this.loginform=this.fb.group({
   'uname':[''],
   'password':['']
    })
  }
  login=[]
  savelogin(emp){
    emp['uname']=this.loginform.get('uname').value;
    emp['password']=this.loginform.get('password').value;
    if(localStorage.getItem('uname')==this.loginform.get('uname').value &&
    localStorage.getItem('password')==this.loginform.get('password').value)
    {
      alert('login successfully');
    }else{
      alert('invalid credintials');
    }
    console.log(emp);
    this.index.savelogin(emp).subscribe(res=>{
      this.login=res;
      console.log(this.login);
    });
  }
}
