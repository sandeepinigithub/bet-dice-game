import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetDiceComponent } from './components/bet-dice/bet-dice.component';

const routes: Routes = [
  {
    path: '',
    component: BetDiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetGameRoutingModule { }
