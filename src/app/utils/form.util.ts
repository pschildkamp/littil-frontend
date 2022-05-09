import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

export class FormUtil {
  public static InValid(control: AbstractControl) {
    if (!control) {
      return false;
    }
    return control.errors !== null && (control.dirty || control.touched);
  }

  public static ValidateAll(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
      control?.updateValueAndValidity();
      if (control instanceof FormGroup || control instanceof FormArray) {
        FormUtil.ValidateAll(control as any);
      }
    });
  }
}
