import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetGameRoutingModule } from './bet-game-routing.module';
import { BetDiceComponent } from './components/bet-dice/bet-dice.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BetDiceComponent
  ],
  imports: [
    CommonModule,
    BetGameRoutingModule,
    FormsModule
  ]
})
export class BetGameModule { }
