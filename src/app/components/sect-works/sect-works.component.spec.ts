import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectWorksComponent } from './sect-works.component';

describe('SectWorksComponent', () => {
  let component: SectWorksComponent;
  let fixture: ComponentFixture<SectWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectWorksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
