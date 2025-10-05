import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-status-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './change-status-popup.component.html',
  styleUrls: ['./change-status-popup.component.css']
})
export class ChangeStatusPopupComponent implements OnChanges {
  @Input() isVisible: boolean = false;
  @Input() currentStatus: 'Activo' | 'Inactivo' = 'Activo';
  @Output() statusChanged = new EventEmitter<'Activo' | 'Inactivo'>();
  @Output() close = new EventEmitter<void>();

  newStatus: 'Activo' | 'Inactivo' = this.currentStatus;

  ngOnChanges() {
    this.newStatus = this.currentStatus;
  }

  closePopup() {
    this.close.emit();
  }

  changeStatus() {
    this.statusChanged.emit(this.newStatus);
    this.closePopup();
  }
}