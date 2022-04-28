import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'littil-form-input-radio',
  templateUrl: './form-input-radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputRadioComponent),
      multi: true,
    },
  ],
})
export class FormInputRadioComponent implements ControlValueAccessor {
  @Input() id!: string;
  @Input() label: string = '';
  @Input() radioInputs: RadioInput[] = [];
  @Input() disabled: boolean = false;
  @Input() errorMessage!: string;
  @Input() hasError: boolean = false;
  @Output() onValueChanged: EventEmitter<string> = new EventEmitter<string>();

  private _value: string = '';

  set value(value: string) {
    this._value = value;
    this.onChange(value);
    this.onValueChanged.emit(value);
  }

  get value(): string {
    return this._value;
  }

  onChange = (event: any) => {};
  onTouched = (event: any) => {};

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}

export interface RadioInput {
  id: string;
  description: string;
  checked: boolean;
}
