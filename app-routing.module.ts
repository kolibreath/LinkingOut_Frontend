import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './edit/layout/layout.component';
import {PeopleComponent} from './people/people.component';
import {OtherpeopleComponent} from './otherpeople/otherpeople.component';

const routes: Routes = [
  {path: 'edit', component: LayoutComponent},
  {path: 'activities', component: PeopleComponent},
  {path: 'activities/:uid', component: OtherpeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {


}
