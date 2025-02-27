import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book3Component } from './book3.component';

describe('Book3Component', () => {
  let component: Book3Component;
  let fixture: ComponentFixture<Book3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Book3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Book3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
