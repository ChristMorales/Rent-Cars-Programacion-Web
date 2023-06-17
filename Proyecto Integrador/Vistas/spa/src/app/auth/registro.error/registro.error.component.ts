import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro.error',
  templateUrl: './registro.error.component.html',
  styleUrls: ['./registro.error.component.css']
})
export class RegistroErrorComponent implements OnInit {
  error: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Retrieve the error data from the ActivatedRoute
    this.error = this.route.snapshot?.data?.['error'];
  
    console.log('Error:', this.error); // Log the error object for debugging
  }

  verMensajeError(): string[] {
    if (this.error) {
      return Object.values(this.error).flat() as string[];
    }
    return [];
  }
}
