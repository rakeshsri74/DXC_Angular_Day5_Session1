import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
   /* userName:any;
    formdata:any;

    ngOnInit(): void {
      this.formdata = new FormGroup({
          userName:new FormControl("DXC")
      });
    }
    onClickSubmit(data:any){
      this.userName = data.userName;
    }*/

    requiredForm : any;
    constructor(private fb :FormBuilder){
      this.myForm();
    }
    myForm(){
      this.requiredForm = this.fb.group({
        name:['',Validators.required]
      });
    }
    ngOnInit(): void {
      
    }
}
