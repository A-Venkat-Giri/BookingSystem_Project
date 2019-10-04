import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTicketComponent } from './get-all-ticket.component';

describe('GetAllTicketComponent', () => {
  let component: GetAllTicketComponent;
  let fixture: ComponentFixture<GetAllTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
