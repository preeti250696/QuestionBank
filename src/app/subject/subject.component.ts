import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  questionList:any =[
    {
      question:'Question 1',
      chapter: 'Chapter 1',
      module:'Module 1',
      topic:'Topic 1',
      category:'Category 1',
      type:'Type 1'
    },
    {
      question:'Question 1',
      chapter: 'Chapter 1',
      module:'Module 1',
      topic:'Topic 1',
      category:'Category 1',
      type:'Type 1'
    },
    {
      question:'Question 1',
      chapter: 'Chapter 1',
      module:'Module 1',
      topic:'Topic 1',
      category:'Category 1',
      type:'Type 1'
    }

  ];

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  addNew(){
   this.router.navigate(['/question/add'])
  }
  editQues(ques){

  }
  deleteQues(ques){

  }
}
