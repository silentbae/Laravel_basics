import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DswDocumentsComponent } from './dsw-documents.component';

describe('DswDocumentsComponent', () => {
  let component: DswDocumentsComponent;
  let fixture: ComponentFixture<DswDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DswDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DswDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
