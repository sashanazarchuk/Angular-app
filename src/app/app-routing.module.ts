import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { GithubUserListComponent } from './github-user-list/github-user-list.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', component: OrderListComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'users/:id', component: GithubUserListComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
