import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomyComponent } from './economy.component';

describe('economyComponent', () => {
  let component: EconomyComponent;
  let fixture: ComponentFixture<EconomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EconomyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
