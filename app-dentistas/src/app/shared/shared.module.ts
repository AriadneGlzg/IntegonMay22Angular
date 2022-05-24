import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './Pipes/sort.pipe';
import { CopyrightDirective } from './Directives/copyright.directive';
import { NumericDirective } from './Directives/numeric.directive';
import { PermissionDirective } from './Directives/permission.directive';



@NgModule({
  declarations: [
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective
  ]

})
export class SharedModule { }
