import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserServiceService } from './user-service.service';
import { TypeFormComponent } from './type-form/type-form.component';
import { TypeListComponent } from './type-list/type-list.component';
import { TypeServiceService } from './type-service.service';
import { EditformComponent } from './editform/editform.component';
import { EditypeComponent } from './editype/editype.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    TypeFormComponent,
    TypeListComponent,
    EditformComponent,
    EditypeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserServiceService, TypeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
