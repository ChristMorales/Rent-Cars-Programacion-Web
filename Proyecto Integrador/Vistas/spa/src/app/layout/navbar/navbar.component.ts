import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  mostrarHeader: boolean=true;
  
  public siMostrarHeader (){
    this.mostrarHeader= true;
  }

  public noMostrarHeader (){
    this.mostrarHeader=false
  }
}
