import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserved',
  standalone: true,
  imports: [],
  templateUrl: './reserved.component.html',
  styleUrl: './reserved.component.css'
})
export class ReservedComponent {

  constructor(private router: Router) {}

  book3() {
    this.router.navigate(['/book3']);
  }

}
