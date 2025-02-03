import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qualified',
  standalone: true,
  imports: [],
  templateUrl: './qualified.component.html',
  styleUrl: './qualified.component.css'
})
export class QualifiedComponent {

  constructor(private router: Router) {}
  
    book4() {
      this.router.navigate(['/book4']);
    }

}
