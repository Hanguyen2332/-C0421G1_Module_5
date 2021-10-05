import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginFormComponent} from "./login-form/login-form.component";
import {TodoComponent} from "./todo/todo.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginFormComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
