import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';

import { AppComponent } from './../component/app/app.component';
import { HeaderComponent } from './../component/header/header.component';
import { UploadComponent } from './../component/upload/upload.component';
import { ResultComponent } from './../component/result/result.component';

import { DataService } from './../service/data.service';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UploadComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
