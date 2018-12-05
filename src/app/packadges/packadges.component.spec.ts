import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackadgesComponent } from './packadges.component';

describe('PackadgesComponent', () => {
  let component: PackadgesComponent;
  let fixture: ComponentFixture<PackadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
