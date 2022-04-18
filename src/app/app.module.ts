import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { ButtonOneComponent } from './components/buttons/button-one/button-one.component';
import { ButtonTwoComponent } from './components/buttons/button-two/button-two.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonOneComponent,
    ButtonTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
