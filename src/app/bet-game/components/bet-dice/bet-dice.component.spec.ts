import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetDiceComponent } from './bet-dice.component';

describe('BetDiceComponent', () => {
  let component: BetDiceComponent;
  let fixture: ComponentFixture<BetDiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetDiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BetDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
