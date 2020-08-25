import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkpadComponent } from './thinkpad.component';

describe('ThinkpadComponent', () => {
  let component: ThinkpadComponent;
  let fixture: ComponentFixture<ThinkpadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinkpadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinkpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
