import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'littil-form-select-text',
  templateUrl: './form-input-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputSelectComponent),
      multi: true,
    },
  ],
})
export class FormInputSelectComponent implements ControlValueAccessor {
  @Input() id!: string;
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() errorMessage!: string;
  @Input() hasError: boolean = false;

  private _value: string = '';

  set value(value: string) {
    this._value = value;
    this.onChange(value);
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
