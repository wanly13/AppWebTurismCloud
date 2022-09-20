import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { P2Component } from '../app/p2/p2.component';
import { P1Component } from '../app/p1/p1.component';
import { P3Component } from './p3/p3.component';
import { P3L1Component } from './p3-l1/p3-l1.component';
import { P3L2Component } from './p3-l2/p3-l2.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {path:'',component: P1Component},
  {path:'P2',component: P2Component},
  {path:'P2/vistas/:id',component: P3Component},
  {path:'P2/vistas/:id/trivia', component: P3L1Component},
  {path:'P2/vistas/:id/trivia/:trivia_id', component: P3L2Component},
  {path:'nosotros', component: SobreNosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }