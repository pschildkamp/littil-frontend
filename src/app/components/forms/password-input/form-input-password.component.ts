import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormInputTextComponent } from '../text-input/form-input-text.component';

@Component({
  selector: 'littil-form-input-password',
  templateUrl: './form-input-password.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputPasswordComponent),
      multi: true,
    },
  ],
})
export class FormInputPasswordComponent
  extends FormInputTextComponent
  implements ControlValueAccessor {}
