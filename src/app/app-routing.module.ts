import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeFormComponent } from './type-form/type-form.component';
import { TypeListComponent } from './type-list/type-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditformComponent } from './editform/editform.component';
import { EditypeComponent } from './editype/editype.component';

const routes: Routes = [

  { path: "users", component: UserListComponent },
  { path: "adduser", component: UserFormComponent },
  { path: "types", component: TypeListComponent },
  { path: "addtype", component: TypeFormComponent },
  { path: "edituser", component: EditformComponent },
  { path: "editype", component: EditypeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
