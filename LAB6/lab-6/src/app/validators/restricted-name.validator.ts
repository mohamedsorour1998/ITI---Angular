import { AbstractControl, ValidatorFn } from '@angular/forms';

export function restrictedNameValidator(
  restrictedNames: string[]
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isRestricted = restrictedNames.includes(control.value);
    return isRestricted ? { restrictedName: { value: control.value } } : null;
  };
}
