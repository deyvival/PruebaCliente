import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmerconfComponent } from './emerconf.component';

describe('EmerconfComponent', () => {
  let component: EmerconfComponent;
  let fixture: ComponentFixture<EmerconfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmerconfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmerconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
