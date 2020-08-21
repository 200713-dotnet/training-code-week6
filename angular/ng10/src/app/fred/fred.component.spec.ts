import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FredComponent } from './fred.component';

describe('FredComponent', () => {
  let component: FredComponent;
  let fixture: ComponentFixture<FredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
