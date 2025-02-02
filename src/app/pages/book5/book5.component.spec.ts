import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Book5Component } from './book5.component';

describe('Book5Component', () => {
  let component: Book5Component;
  let fixture: ComponentFixture<Book5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Book5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Book5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
