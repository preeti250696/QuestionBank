import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AddSubjectComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    SharedModule
  ]
})
export class SubjectModule { }
