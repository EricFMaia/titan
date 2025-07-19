import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectContactComponent } from './sect-contact.component';

describe('SectContactComponent', () => {
  let component: SectContactComponent;
  let fixture: ComponentFixture<SectContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
