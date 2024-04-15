import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // for lazy loading 
  {
    path: '',
    loadChildren: () => import('./bet-game/bet-game.module').then((module) => module?.BetGameModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
