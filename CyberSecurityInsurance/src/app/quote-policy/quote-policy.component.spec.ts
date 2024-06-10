import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePolicyComponent } from './quote-policy.component';

describe('QuotePolicyComponent', () => {
  let component: QuotePolicyComponent;
  let fixture: ComponentFixture<QuotePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotePolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
