import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  { path: '', component: EntryComponent },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
  },
  { path: 'posts/:id', component: UserPostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
