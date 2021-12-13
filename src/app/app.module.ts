import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './general/header/header.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    UsersUpdateComponent
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
