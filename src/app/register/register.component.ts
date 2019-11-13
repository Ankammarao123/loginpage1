import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private index:IndexService) { }
  registerform:FormGroup;
  ngOnInit() {
    this.registerform=this.fb.group({
    'uname':[''],
    'password':[''],
    'email':['']
    })
   this.getregister();
  }
  empList=[];
  getregister(){
    this.index.getdata().subscribe(res=>{
      this.empList=res;
      console.log(this.empList);
    })
  }
  savedata(emp){
    localStorage.setItem('uname',this.registerform.get('uname').value);
    localStorage.setItem('password',this.registerform.get('password').value);
    console.log(emp);
    this.index.savedata(emp).subscribe(res=>{
      this.empList=res;
      console.log(this.empList)
      this.getregister();
    })
  }
}
