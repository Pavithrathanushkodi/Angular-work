import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formtable',
  templateUrl: './formtable.component.html',
  styleUrls: ['./formtable.component.css']
})
export class FormtableComponent {
  @ViewChild('myForm') ngForm!: NgForm;

  students = [
    { name: 'Hallon', regno: '18', address: 'Thiruvarur' },
    { name: 'babu', regno: '21', address: 'Dindugul' }
  ];

  name: string = '';
  regno: string = '';
  address: string = '';
  
  
  editing: boolean = false;
  selectedStudent: any = {};
  
  onSubmit() {
    this.addList();
    this.clearForm();
    
  }

  addList() {
    this.students.push({ name: this.name, regno: this.regno, address: this.address });
  }

  clearForm() {
    this.ngForm.resetForm();
  }
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }
  editStudent(Student:any){
    this.editing = true;
    this.selectedStudent = { ...this.students };
  }
  cancelEdit() {
    this.editing = false;
    this.selectedStudent = {};
  }
}