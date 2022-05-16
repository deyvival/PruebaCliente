import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmerhistComponent } from './emerhist.component';

describe('EmerhistComponent', () => {
  let component: EmerhistComponent;
  let fixture: ComponentFixture<EmerhistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmerhistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmerhistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
