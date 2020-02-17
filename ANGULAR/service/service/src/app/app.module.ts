import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent }  from './observable.component';
import { PromiseComponent }  from './promise.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
		PromiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
