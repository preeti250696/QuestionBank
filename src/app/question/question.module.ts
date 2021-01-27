import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { AddQuestionComponent } from './add-question/add-question.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AddQuestionComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    SharedModule
  ]
})
export class QuestionModule { }
