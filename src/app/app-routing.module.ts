import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { GithubUserListComponent } from './github-user-list/github-user-list.component';
import { SearchComponent } from './search/search.component';
import { AddPostComponent } from './post/add-post/add-post.component';


const routes: Routes = [
  { path: '', component: OrderListComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'users/:id', component: GithubUserListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'add-post', component: AddPostComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
