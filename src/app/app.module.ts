import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { KatexModule } from 'ng-katex';
import { AceEditorModule } from 'ng2-ace-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PagebodyComponent } from './components/pagebody/pagebody.component';
import { SegmentComponent } from './components/segment/segment.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PagebodyComponent,
    SegmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
	KatexModule,
	AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
