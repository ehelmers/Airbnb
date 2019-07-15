import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertydetailsPage } from './propertydetails.page';

describe('PropertydetailsPage', () => {
  let component: PropertydetailsPage;
  let fixture: ComponentFixture<PropertydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertydetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
