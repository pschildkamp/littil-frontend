import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() colorClass: string = 'bg-blue-200';
  @Output() public onClick = new EventEmitter<any>();
}
