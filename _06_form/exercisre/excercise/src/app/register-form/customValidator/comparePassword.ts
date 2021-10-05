import {AbstractControl} from "@angular/forms";

export function comparePassword( field : AbstractControl) {
  const value = field.value;
  return (value.password === value.confirmPassword) ?
    null : {
    passwordNotMatch: true
  } ;
}
