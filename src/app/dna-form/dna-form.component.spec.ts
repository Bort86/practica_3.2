import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnaFormComponent } from './dna-form.component';

describe('DnaFormComponent', () => {
  let component: DnaFormComponent;
  let fixture: ComponentFixture<DnaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
