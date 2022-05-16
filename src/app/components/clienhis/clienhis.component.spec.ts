import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienhisComponent } from './clienhis.component';

describe('ClienhisComponent', () => {
  let component: ClienhisComponent;
  let fixture: ComponentFixture<ClienhisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienhisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienhisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
