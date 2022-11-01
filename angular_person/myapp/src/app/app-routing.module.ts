import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonViewpageComponent } from './person-viewpage/person-viewpage.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [{path:'',component:PersonComponent},
{path:'viewpage/:id',component:PersonViewpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
