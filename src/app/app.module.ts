import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
