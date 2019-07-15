import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioPage } from './bio.page';

describe('BioPage', () => {
  let component: BioPage;
  let fixture: ComponentFixture<BioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
