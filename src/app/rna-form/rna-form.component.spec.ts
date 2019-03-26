import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RnaFormComponent } from './rna-form.component';

describe('RnaFormComponent', () => {
  let component: RnaFormComponent;
  let fixture: ComponentFixture<RnaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RnaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RnaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
