import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hover-squares',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './hover-squares.component.html',
  styleUrl: './hover-squares.component.scss'
})
export class HoverSquaresComponent {
  @Input() grid!: boolean[][];
}
