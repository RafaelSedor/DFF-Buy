import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPurchasedComponent } from './main-purchased.component';

describe('MainPurchasedComponent', () => {
  let component: MainPurchasedComponent;
  let fixture: ComponentFixture<MainPurchasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPurchasedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
