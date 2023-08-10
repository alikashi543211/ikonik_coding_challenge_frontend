import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionRequestComponent } from './connection-request.component';

describe('ConnectionRequestComponent', () => {
  let component: ConnectionRequestComponent;
  let fixture: ComponentFixture<ConnectionRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionRequestComponent]
    });
    fixture = TestBed.createComponent(ConnectionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
