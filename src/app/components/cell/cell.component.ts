import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() public isHovered: boolean = false;
  @Output() public onHover: EventEmitter<void> = new EventEmitter<void>();

  public onMouseEnter(): void {
    this.onHover.emit();
  }
}
