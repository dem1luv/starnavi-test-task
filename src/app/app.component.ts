import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './components/cell/cell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
