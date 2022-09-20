import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3L2Component } from './p3-l2.component';

describe('P3L2Component', () => {
  let component: P3L2Component;
  let fixture: ComponentFixture<P3L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3L2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P3L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
