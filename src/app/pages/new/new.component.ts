import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  constructor(private router: Router) {}
    
      book5() {
        this.router.navigate(['/book5']);
      }

}
