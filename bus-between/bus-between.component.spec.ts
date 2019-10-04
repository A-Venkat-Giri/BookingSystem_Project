import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBetweenComponent } from './bus-between.component';

describe('BusBetweenComponent', () => {
  let component: BusBetweenComponent;
  let fixture: ComponentFixture<BusBetweenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusBetweenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusBetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
