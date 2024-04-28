import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
firstForm! : FormGroup
item : any ={}
constructor(private buildForm : FormBuilder){

}
ngOnInit(): void {
  this.firstForm = this.buildForm.group({
    name:['',Validators.required],
    username:['',Validators.required],
    email:['',Validators.required],
    contact:['',Validators.required],
    gender:['',Validators.required]
  })
  
}

onSubmit(){
console.log(this.firstForm.value)
}
clearform(){
  this.firstForm.reset()
}
editdetails (item: any){
  this.firstForm.patchValue({
    name:item.name,
    username:item.username,
    email:item.email,
    // contact:item.contact,
    // gender:item.gender

  })

}
}
