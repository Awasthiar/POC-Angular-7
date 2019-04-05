import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Routing module for router service
import { AppRoutingModule } from './app-routing.module';
// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
