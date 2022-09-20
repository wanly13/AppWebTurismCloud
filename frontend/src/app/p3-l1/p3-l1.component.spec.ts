import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3L1Component } from './p3-l1.component';

describe('P3L1Component', () => {
  let component: P3L1Component;
  let fixture: ComponentFixture<P3L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3L1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P3L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
