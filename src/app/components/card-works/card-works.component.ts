import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-works',
  templateUrl: './card-works.component.html',
  styleUrl: './card-works.component.scss'
})
export class CardWorksComponent {
@Input({required: true}) icon: string = '';
@Input({required: true}) title: string = '';
@Input({required: true}) description: string = '';
}
