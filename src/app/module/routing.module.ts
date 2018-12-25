import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UploadComponent } from './../component/upload/upload.component';
import { ResultComponent } from './../component/result/result.component';

export const routes: Routes = [
  { path: '', component: UploadComponent },
  { path: 'result', component: ResultComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
