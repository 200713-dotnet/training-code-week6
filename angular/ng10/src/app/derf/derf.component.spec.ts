import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerfComponent } from './derf.component';

describe('DerfComponent', () => {
  let component: DerfComponent;
  let fixture: ComponentFixture<DerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
