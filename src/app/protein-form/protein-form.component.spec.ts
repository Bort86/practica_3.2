import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinFormComponent } from './protein-form.component';

describe('ProteinFormComponent', () => {
  let component: ProteinFormComponent;
  let fixture: ComponentFixture<ProteinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteinFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
