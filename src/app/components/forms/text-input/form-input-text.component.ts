import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'littil-form-input-text',
  templateUrl: './form-input-text.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputTextComponent),
      multi: true,
    },
  ],
})
export class FormInputTextComponent implements ControlValueAccessor {
  @Input() id!: string;
  @Input() label: string = '';
  @Input() placeholder: string = '';
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
  onTouched = () => {};

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
