import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {
showMessage : boolean = false;
isVisible : boolean = false;
userName: string = ' ';
password: string = ' ';
title : string = 'Instagram'
 toggleMessage(){

  this.showMessage=!this.showMessage
}

toggleVisibility(){
  this.isVisible = !this.isVisible;
  
}
}
