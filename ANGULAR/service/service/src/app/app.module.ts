import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent }  from './app.component';
import { ObservableComponent }  from './observable.component';
import { PromiseComponent }  from './promise.component';
import { BookService } from './book.service';

@NgModule({
  imports: [
        BrowserModule,
        HttpClientModule
  ],
  declarations: [
        AppComponent,
		ObservableComponent,
		PromiseComponent
  ],
  providers: [
        BookService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
