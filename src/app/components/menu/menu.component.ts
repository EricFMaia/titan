import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isDisable = false;


  togglePropoperty(){
    this.isDisable = !this.isDisable;
  }

}
