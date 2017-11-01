import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    // Angular router has two matching strategies:
    // prefix: default, matches when the URL starts with the value of path
    // full: matches when the URL equals the value of path
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodosComponent
    // children: [
    //   {
    //     path: '',
    //     component: 'TodosPageComponent'
    //   },
    //   {
    //     path: ':id',
    //     component: 'TodoPageComponent'
    //   }
    // ]
  },
  // ** has to be at the bottom, or will takeover other routes
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  // creates a routing module that includes the router directives, the route configuration and the router service
  // forChild(routes): creates a routing module that includes the router directives, the route configuration but not the router service
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}