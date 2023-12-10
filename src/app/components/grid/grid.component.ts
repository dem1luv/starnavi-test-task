import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    CellComponent
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  @Input() grid!: boolean[][];
  @Output() cellHover: EventEmitter<[number, number]> = new EventEmitter<[number, number]>();

  public onCellHover(row: number, col: number): void {
    this.cellHover.emit([row, col]);
  }
}
