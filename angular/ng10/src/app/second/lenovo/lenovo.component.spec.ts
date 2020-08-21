import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenovoComponent } from './lenovo.component';

describe('LenovoComponent', () => {
  let component: LenovoComponent;
  let fixture: ComponentFixture<LenovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
