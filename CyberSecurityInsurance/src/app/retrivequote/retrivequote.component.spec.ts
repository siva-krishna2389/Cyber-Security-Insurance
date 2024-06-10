import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrivequoteComponent } from './retrivequote.component';

describe('RetrivequoteComponent', () => {
  let component: RetrivequoteComponent;
  let fixture: ComponentFixture<RetrivequoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrivequoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrivequoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
