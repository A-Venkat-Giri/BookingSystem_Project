import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFeedabckComponent } from './show-feedabck.component';

describe('ShowFeedabckComponent', () => {
  let component: ShowFeedabckComponent;
  let fixture: ComponentFixture<ShowFeedabckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFeedabckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFeedabckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
