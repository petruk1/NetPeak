import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLightsComponent } from './high-lights.component';

describe('HighLightsComponent', () => {
  let component: HighLightsComponent;
  let fixture: ComponentFixture<HighLightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighLightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
