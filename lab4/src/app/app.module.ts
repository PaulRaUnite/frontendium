import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';
import {FormsModule} from "@angular/forms";
import { ForbiddenTitleDirective } from './forbidden-title.directive';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    BookDetailsComponent,
    BookFormComponent,
    ForbiddenTitleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
