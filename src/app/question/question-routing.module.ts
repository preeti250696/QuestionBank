import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionComponent } from './question.component';

const routes: Routes = [
  {
    path:'',
    component:QuestionComponent
  },
  {
    path:'add',
    component:AddQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
