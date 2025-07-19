import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-count',
  templateUrl: './card-count.component.html',
  styleUrl: './card-count.component.scss'
})
export class CardCountComponent {
  @Input({required: true}) value: string = '';
  @Input({required: true}) text: string = '';

}
