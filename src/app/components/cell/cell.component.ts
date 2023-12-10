import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent {
  public isHovered: boolean = false;

  onMouseEnter(): void {
    this.isHovered = !this.isHovered;
  }
}
