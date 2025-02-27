import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessComponent } from './less.component';

describe('LessComponent', () => {
  let component: LessComponent;
  let fixture: ComponentFixture<LessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
