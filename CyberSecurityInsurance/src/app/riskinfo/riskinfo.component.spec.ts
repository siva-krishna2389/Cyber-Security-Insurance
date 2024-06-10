import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskinfoComponent } from './riskinfo.component';

describe('RiskinfoComponent', () => {
  let component: RiskinfoComponent;
  let fixture: ComponentFixture<RiskinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
