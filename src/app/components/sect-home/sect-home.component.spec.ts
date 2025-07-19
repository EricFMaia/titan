import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectHomeComponent } from './sect-home.component';

describe('SectHomeComponent', () => {
  let component: SectHomeComponent;
  let fixture: ComponentFixture<SectHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
