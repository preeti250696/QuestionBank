import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { SubjectComponent } from './subject.component';

const routes: Routes = [
  {
    path:'',
    component:SubjectComponent
  },
  {
    path:'add',
    component:AddSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
