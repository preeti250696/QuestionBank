import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MatInputModule } from '@angular/material/input';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";
import {DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ButtonModule,
    TableModule,
    MatInputModule,
    ClipboardModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    DialogModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    ButtonModule,
    TableModule,
    MatInputModule,
    ClipboardModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    DialogModule
  ]
})
export class SharedModule { }
