import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherpeopleComponent } from './otherpeople.component';

describe('OtherpeopleComponent', () => {
  let component: OtherpeopleComponent;
  let fixture: ComponentFixture<OtherpeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherpeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
