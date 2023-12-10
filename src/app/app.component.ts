import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './components/cell/cell.component';
import { Mode } from './types/mode.interface';
import { ModeService } from './services/mode.service';
import { take } from 'rxjs';
import { StartFormComponent } from './components/start-form/start-form.component';
import { GridComponent } from './components/grid/grid.component';
import { HoverSquaresComponent } from './components/hover-squares/hover-squares.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CellComponent, StartFormComponent, GridComponent, HoverSquaresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public modes: Mode[] = [];
  public grid!: boolean[][];

  constructor(
    private readonly modeService: ModeService
  ) {
  }

  public ngOnInit(): void {
    this.getModes();
  }

  public onStart(mode: Mode): void {
    this.grid = [];
    for (let row = 0; row < mode.field; row++) {
      this.grid[row] = [];
      for (let column = 0; column < mode.field; column++) {
        this.grid[row][column] = false;
      }
    }
  }

  public onCellHover(rowCol: number[]): void {
    const [row, col] = rowCol;
    this.grid[row][col] = !this.grid[row][col];
  }

  private getModes(): void {
    this.modeService.getModes().pipe(take(1)).subscribe(modes => this.modes = modes);
  }
}
