import {Directive, Input} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from "@angular/forms";

function forbiddenTitleValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let letter = control.value.toString()[0];
    let big_letter = letter.toUpperCase();
    return letter != big_letter ? {'forbiddenTitle': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenTitle]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenTitleDirective, multi: true}]
})
export class ForbiddenTitleDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    return forbiddenTitleValidator()(control)
  }
}
