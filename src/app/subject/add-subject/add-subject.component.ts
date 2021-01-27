import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QbDatabaseService } from 'src/app/qb-database.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  ClassList: any = [];
  SubjectList: any = [];
  subjectForm: FormGroup;
  constructor(private service:QbDatabaseService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    this.ClassList = this.service.ClassList;
    this.SubjectList = this.service.SubjectList;
  }
  buildForm(){
    this.subjectForm = this.fb.group({
      class: ['', Validators.required],
      subject: ['', Validators.required]
    })
  }
  submitForm(){
   console.log(this.subjectForm.value);
  }
  cancel(){
    window.history.back();
  }
}
