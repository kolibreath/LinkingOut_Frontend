import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
// import { AuthComponent } from './auth/auth.component';
import {LogininComponent} from './loginin/loginin.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {RegisterComponent} from './register/register.component';
import {RegisterpageComponent} from './registerpage/registerpage.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    // AuthComponent,
    LogininComponent,
    LoginpageComponent,
    RegisterComponent,
    RegisterpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule,

    //todo remember to delete when the app is online
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    )
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
