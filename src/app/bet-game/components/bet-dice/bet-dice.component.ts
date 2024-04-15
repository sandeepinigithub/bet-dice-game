import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet-dice',
  templateUrl: './bet-dice.component.html',
  styleUrl: './bet-dice.component.scss'
})
export class BetDiceComponent implements OnInit {
  //Define variable here
  amount: number = 100;

  betAmount: number = 0;
  diceFaces: any[] = [
    {
      diceFace: 1,
      value: 0
    },
    {
      diceFace: 2,
      value: 0
    },
    {
      diceFace: 3,
      value: 0
    },
    {
      diceFace: 4,
      value: 0
    },
    {
      diceFace: 5,
      value: 0
    },
    {
      diceFace: 6,
      value: 0
    },
  ]

  diceValue: number = 0;
  winAmount: number = 0

  constructor() { }

  ngOnInit(): void {

  }

  onFaceBet(diceIndex: number): void {
    // Increase the bet amount by 1 
    //also handle amount should be available i.e > 0
    this.betAmount += 1;
    this.amount = this.amount - 1;
    this.diceFaces[diceIndex].value += 1;
  }

  onReset() {
    this.amount = 100;
    this.betAmount = 0;
    this.diceValue = 0
    this.winAmount = 0;
    this.diceFaces = [
      {
        diceFace: 1,
        value: 0
      },
      {
        diceFace: 2,
        value: 0
      },
      {
        diceFace: 3,
        value: 0
      },
      {
        diceFace: 4,
        value: 0
      },
      {
        diceFace: 5,
        value: 0
      },
      {
        diceFace: 6,
        value: 0
      },
    ]
  }

  onBet() {
    let randomNum: any = ((Math.random() * 10) % 6 + 1).toFixed(0);
    this.diceValue = randomNum
    this.diceFaces.forEach((face: any) => {
      debugger
      if (face.value != 0 && face.diceFace == this.diceValue) {
        this.winAmount = face?.value * 2;
      }
    })

    if(this.winAmount > 0){
      this.amount = this.amount + this.winAmount
    }

  }

}
