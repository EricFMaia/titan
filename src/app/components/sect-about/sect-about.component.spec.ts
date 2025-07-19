import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectAboutComponent } from './sect-about.component';

describe('SectAboutComponent', () => {
  let component: SectAboutComponent;
  let fixture: ComponentFixture<SectAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
