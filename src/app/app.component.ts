import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './components/cell/cell.component';
import { Mode } from './types/mode.interface';
import { ModeService } from './services/mode.service';
import { take } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CellComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public modes: Mode[] = [];
  public selectedModeId: string = '';

  public grid!: boolean[][];

  constructor(
    private readonly modeService: ModeService
  ) {
  }

  public ngOnInit(): void {
    this.getModes();
  }

  public onStart(): void {
    const mode = this.modes.find(mode => mode.id === this.selectedModeId);
    if (!mode) {
      return;
    }

    this.grid = [];
    for (let row = 0; row < mode.field; row++) {
      this.grid[row] = [];
      for (let column = 0; column < mode.field; column++) {
        this.grid[row][column] = false;
      }
    }
  }

  public onCellHover(row: number, col: number): void {
    this.grid[row][col] = !this.grid[row][col];
  }

  private getModes(): void {
    this.modeService.getModes().pipe(take(1)).subscribe(modes => this.modes = modes);
  }
}
