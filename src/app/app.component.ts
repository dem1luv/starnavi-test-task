import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './components/cell/cell.component';
import { Mode } from './types/mode.interface';
import { ModeService } from './services/mode.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  modes: Mode[] = [];

  constructor(
    private readonly modeService: ModeService
  ) {
  }

  ngOnInit() {
    this.modeService.getModes().pipe(take(1)).subscribe(modes => this.modes = modes);
  }
}
