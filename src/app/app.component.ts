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
  isHovered: boolean = false;
  public modes: Mode[] = [];
  public size: number = 5;

  public selectedModeId: string = '';

  constructor(
    private readonly modeService: ModeService
  ) {
  }

  public ngOnInit(): void {
    this.modeService.getModes().pipe(take(1)).subscribe(modes => this.modes = modes);
  }

  public onStart(): void {
    const mode = this.modes.find(mode => mode.id === this.selectedModeId);
    if (!mode) {
      return;
    }

    this.size = mode.field;
  }
}
