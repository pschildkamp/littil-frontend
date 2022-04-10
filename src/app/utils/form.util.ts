import { AbstractControl } from '@angular/forms';

export class FormUtil {
  public static InValid(control: AbstractControl) {
    if (!control) {
      return false;
    }
    return control.errors !== null && (control.dirty || control.touched);
  }
}
