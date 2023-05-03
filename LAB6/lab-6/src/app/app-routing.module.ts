import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Add this
import { ProductsComponent } from './products/products.component'; // Add this
import { UsersComponent } from './users/users.component'; // Add this
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithoutDiscountComponent } from './products-without-discount/products-without-discount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Add this
  { path: 'products', component: ProductsComponent }, // Add this
  { path: 'users', component: UsersComponent }, // Add this
  { path: 'posts', component: PostsComponent }, // Add this
  { path: 'comments/:id', component: CommentsComponent }, // Add this
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: 'with-discount', component: ProductsWithDiscountComponent },
      { path: 'without-discount', component: ProductsWithoutDiscountComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
