import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { GithubUserListComponent } from './github-user-list/github-user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabmenuComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { AddPostComponent } from './post/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    GithubUserListComponent,
    TabmenuComponent,
    SearchComponent,
    AppComponent,
    AddPostComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    TabMenuModule,
    CheckboxModule,
    InputNumberModule,
    CalendarModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
