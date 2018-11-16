import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { materialExports } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ForgetpasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // FormsModule,
    materialExports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
