import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Add this
import { ProductsComponent } from './products/products.component'; // Add this
import { UsersComponent } from './users/users.component'; // Add this
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Add this
  { path: 'products', component: ProductsComponent }, // Add this
  { path: 'users', component: UsersComponent }, // Add this
  { path: 'posts', component: PostsComponent }, // Add this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
