import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Mode } from '../../types/mode.interface';

@Component({
  selector: 'app-start-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './start-form.component.html',
  styleUrl: './start-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartFormComponent {
  @Input() modes?: Mode[];
  @Output() start: EventEmitter<Mode> = new EventEmitter<Mode>();
  public selectedModeId: string = '';

  public onStart(): void {
    if (!this.selectedModeId || !this.modes) {
      return;
    }

    this.start.emit(this.modes.find((mode: Mode) => mode.id === this.selectedModeId));
  }
}
