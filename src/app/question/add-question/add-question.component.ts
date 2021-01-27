import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QbDatabaseService } from 'src/app/qb-database.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  addQuestionForm: FormGroup;
  ClassList: any = [];
  SubjectList: any = [];
  ChapterList: any = [];
  displayModal = false;
  TopicList: any = [];
  categories: any = [];
  moduleList: any = [];
  typeList: any = {
    'T1' : {
      ID: "T1",
      Text: "Type 1"
    },
    'T2' : {
      ID: "T2",
      Text: "Type 2"
    },
    'T3' : {
      ID: "T3",
      Text: "Type 3"
    }
  }
  constructor(private service: QbDatabaseService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    this.ClassList = this.service.ClassList;
    this.categories = this.service.Categories;
    this.moduleList = this.service.ModuleList;
  }
  buildForm(){
   this.addQuestionForm = this.fb.group({
     questionId: [''],
     classId: ['', Validators.required],
     subjectId: [{value:'', disabled:true}, Validators.required],
     chapterId: ['', Validators.required],
     topicId: ['',Validators.required],
     typeId: [''],
     catId: ['', Validators.required],
     moduleId: [''],
     questionText: ['', Validators.required]
   })
  }
  saveQuestion(){
   console.log(this.addQuestionForm.value);
   let chapterID = this.addQuestionForm.value.chapterId;
   let typeID = this.addQuestionForm.value.typeId;
   let d = new Date();
   let SerialNumber = d.getFullYear().toString() + (d.getMonth() + 1).toString() + d.getDate().toString() + d.getHours().toString() + d.getMinutes().toString() + d.getSeconds().toString();
   this.addQuestionForm.value.questionId = chapterID +'||'+ typeID +'||'+ SerialNumber;
   console.log(this.addQuestionForm.value.questionId);
   this.service.addQuestion(this.addQuestionForm.value);
  }
  cancel(){
    window.history.back();
  }
  getSubjectList(){
    this.addQuestionForm.get('subjectId').enable();
    this.SubjectList = this.service.SubjectList;
  }
  getTopicList(id){
    this.TopicList = this.service.getTopicList(id);
  }
  getChapterList(){
    this.ChapterList = this.service.getChapterList(this.addQuestionForm.value.classId, this.addQuestionForm.value.subjectId);
  }
}
