import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdToolbarModule, MdIconModule, MdCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdToolbarModule, MdIconModule, MdCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
