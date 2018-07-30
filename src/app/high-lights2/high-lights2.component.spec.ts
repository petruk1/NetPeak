import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLights2Component } from './high-lights2.component';

describe('HighLights2Component', () => {
  let component: HighLights2Component;
  let fixture: ComponentFixture<HighLights2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighLights2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighLights2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
