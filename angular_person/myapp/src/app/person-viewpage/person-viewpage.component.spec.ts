import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonViewpageComponent } from './person-viewpage.component';

describe('PersonViewpageComponent', () => {
  let component: PersonViewpageComponent;
  let fixture: ComponentFixture<PersonViewpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonViewpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonViewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
