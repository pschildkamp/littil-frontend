import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'littil-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() colorClass: string = 'bg-blue-200';
  @Input() inline: boolean = false;
  @Output() public onClick = new EventEmitter<any>();
}
